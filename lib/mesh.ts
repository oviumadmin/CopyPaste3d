/**
 * In-browser mesh analysis for the quote estimator.
 * Parses STL / OBJ / 3MF with three.js loaders and computes
 * bounding box + volume (signed tetrahedron sum). Units assumed mm.
 */
import * as THREE from "three";

export type SupportedFormat = "stl" | "obj" | "3mf" | "step";

export interface MeshStats {
  /** Axis-aligned bounding box, mm. */
  size: { x: number; y: number; z: number };
  /** Mesh volume in cm³. */
  volumeCm3: number;
  triangles: number;
}

export interface ParsedModel {
  /** Merged geometry for preview rendering (centered). */
  object: THREE.Object3D;
  stats: MeshStats;
}

export function detectFormat(fileName: string): SupportedFormat | null {
  const ext = fileName.split(".").pop()?.toLowerCase();
  if (ext === "stl") return "stl";
  if (ext === "obj") return "obj";
  if (ext === "3mf") return "3mf";
  if (ext === "step" || ext === "stp") return "step";
  return null;
}

export async function parseModelFile(file: File): Promise<ParsedModel> {
  const format = detectFormat(file.name);
  if (!format || format === "step") {
    throw new Error(`Unsupported format: ${file.name}`);
  }

  let object: THREE.Object3D;

  if (format === "stl") {
    const { STLLoader } = await import(
      "three/examples/jsm/loaders/STLLoader.js"
    );
    const buffer = await file.arrayBuffer();
    const geometry = new STLLoader().parse(buffer);
    object = new THREE.Mesh(geometry);
  } else if (format === "obj") {
    const { OBJLoader } = await import(
      "three/examples/jsm/loaders/OBJLoader.js"
    );
    const text = await file.text();
    object = new OBJLoader().parse(text);
  } else {
    const { ThreeMFLoader } = await import(
      "three/examples/jsm/loaders/3MFLoader.js"
    );
    const buffer = await file.arrayBuffer();
    object = new ThreeMFLoader().parse(buffer);
  }

  object.updateMatrixWorld(true);
  const stats = computeStats(object);
  if (stats.triangles === 0) {
    throw new Error("No triangles found in model");
  }

  // Center on origin, rest on the "build plate" (y = 0 after z-up→y-up flip
  // handled in the viewer). Keep it simple: center fully.
  const box = new THREE.Box3().setFromObject(object);
  const center = box.getCenter(new THREE.Vector3());
  object.position.sub(center);

  return { object, stats };
}

function computeStats(root: THREE.Object3D): MeshStats {
  let volumeMm3 = 0;
  let triangles = 0;

  const vA = new THREE.Vector3();
  const vB = new THREE.Vector3();
  const vC = new THREE.Vector3();

  root.traverse((node) => {
    const mesh = node as THREE.Mesh;
    if (!mesh.isMesh || !mesh.geometry) return;
    const geom = mesh.geometry as THREE.BufferGeometry;
    const pos = geom.getAttribute("position");
    if (!pos) return;
    const index = geom.getIndex();
    const matrix = mesh.matrixWorld;

    const triCount = index ? index.count / 3 : pos.count / 3;
    triangles += Math.floor(triCount);

    for (let i = 0; i < triCount; i++) {
      if (index) {
        vA.fromBufferAttribute(pos, index.getX(i * 3));
        vB.fromBufferAttribute(pos, index.getX(i * 3 + 1));
        vC.fromBufferAttribute(pos, index.getX(i * 3 + 2));
      } else {
        vA.fromBufferAttribute(pos, i * 3);
        vB.fromBufferAttribute(pos, i * 3 + 1);
        vC.fromBufferAttribute(pos, i * 3 + 2);
      }
      vA.applyMatrix4(matrix);
      vB.applyMatrix4(matrix);
      vC.applyMatrix4(matrix);
      // Signed volume of tetrahedron (origin, A, B, C)
      volumeMm3 += vA.dot(vB.clone().cross(vC)) / 6;
    }
  });

  const box = new THREE.Box3().setFromObject(root);
  const size = box.getSize(new THREE.Vector3());

  return {
    size: { x: size.x, y: size.y, z: size.z },
    volumeCm3: Math.abs(volumeMm3) / 1000,
    triangles,
  };
}
