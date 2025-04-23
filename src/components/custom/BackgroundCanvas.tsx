// components/custom/BackgroundCanvas.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas className="h-full w-full">
        <AnimatedScene />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

function AnimatedScene() {
  const group = useRef<THREE.Group>(null!);

  // 0.02 rad ≈ 1.1 deg per second (was 0.10 rad ≈ 5.7 deg)
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.001;
    }
  });

  return (
    <group ref={group}>
      <Sparkles
        count={1200}
        scale={[15, 15, 15]}
        size={1.5}
        color="#60a5fa"
        speed={0.1} // lower = gentler flicker (default is 1)
      />
    </group>
  );
}
