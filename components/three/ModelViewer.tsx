"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Environment } from "@react-three/drei";
import type { Object3D } from "three";
import type { DemoModel } from "@/lib/portfolio";
import { DemoMesh } from "./DemoMesh";

/**
 * Shared rotatable/zoomable viewer (OrbitControls + Stage + Environment).
 * Used for portfolio demo pieces, the AMS visualizer and the estimator
 * preview. Loaded only via next/dynamic so three.js stays out of the
 * initial bundle.
 *
 * Pass EITHER a procedural `demoModel` (+ colors) OR a parsed `object`
 * (from the estimator's mesh parser).
 */
export function ModelViewer({
  demoModel,
  colors = ["#14B8B1"],
  object,
  autoRotate = true,
  className = "h-full w-full",
}: {
  demoModel?: DemoModel;
  colors?: string[];
  object?: Object3D;
  autoRotate?: boolean;
  className?: string;
}) {
  return (
    <Canvas
      className={className}
      shadows
      dpr={[1, 2]}
      camera={{ position: [4, 3, 5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Stage
          intensity={0.5}
          environment="city"
          adjustCamera={1.1}
          shadows={{ type: "contact", opacity: 0.35, blur: 2.5 }}
        >
          {object ? (
            <primitive object={object} />
          ) : (
            <DemoMesh model={demoModel ?? "figurine"} colors={colors} />
          )}
        </Stage>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        makeDefault
        autoRotate={autoRotate}
        autoRotateSpeed={0.8}
        enablePan={false}
        minDistance={3}
        maxDistance={12}
      />
    </Canvas>
  );
}
