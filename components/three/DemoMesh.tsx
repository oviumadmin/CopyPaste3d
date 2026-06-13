"use client";

import { useMemo } from "react";
import * as THREE from "three";
import type { DemoModel } from "@/lib/portfolio";

/**
 * Procedural stand-in geometry for portfolio pieces and the AMS visualizer,
 * shown until real scanned STL files are supplied. Each model is built from
 * primitives so it carries zero asset weight.
 */
export function DemoMesh({
  model,
  colors,
}: {
  model: DemoModel;
  colors: string[];
}) {
  const c = (i: number) => colors[i % colors.length] ?? "#14B8B1";

  const material = useMemo(
    () => ({ roughness: 0.45, metalness: 0.1 }),
    []
  );

  switch (model) {
    case "bracket":
      return (
        <group>
          <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
            <boxGeometry args={[2.4, 0.4, 1.6]} />
            <meshStandardMaterial color={c(0)} {...material} />
          </mesh>
          <mesh castShadow receiveShadow position={[-0.9, 0.4, 0]}>
            <boxGeometry args={[0.4, 1.4, 1.6]} />
            <meshStandardMaterial color={c(1)} {...material} />
          </mesh>
          <mesh castShadow position={[0.5, 0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.28, 0.28, 1.7, 32]} />
            <meshStandardMaterial color={c(0)} {...material} />
          </mesh>
        </group>
      );
    case "knob":
      return (
        <group>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[1, 1.2, 0.9, 48]} />
            <meshStandardMaterial color={c(0)} {...material} />
          </mesh>
          <mesh castShadow position={[0, 0.6, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
            <meshStandardMaterial color={c(1)} {...material} />
          </mesh>
          {Array.from({ length: 10 }).map((_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return (
              <mesh
                key={i}
                castShadow
                position={[Math.cos(a) * 1.12, 0, Math.sin(a) * 1.12]}
              >
                <boxGeometry args={[0.18, 0.92, 0.18]} />
                <meshStandardMaterial color={c(0)} {...material} />
              </mesh>
            );
          })}
        </group>
      );
    case "knot":
      return (
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[1, 0.33, 160, 24]} />
          <meshStandardMaterial color={c(0)} {...material} />
        </mesh>
      );
    case "figurine":
    default:
      return (
        <group>
          {/* head */}
          <mesh castShadow position={[0, 1.25, 0]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={c(2)} {...material} />
          </mesh>
          {/* torso */}
          <mesh castShadow position={[0, 0.25, 0]}>
            <capsuleGeometry args={[0.55, 0.9, 8, 24]} />
            <meshStandardMaterial color={c(0)} {...material} />
          </mesh>
          {/* base */}
          <mesh receiveShadow position={[0, -0.85, 0]}>
            <cylinderGeometry args={[0.8, 0.9, 0.3, 48]} />
            <meshStandardMaterial color={c(1)} {...material} />
          </mesh>
        </group>
      );
  }
}
