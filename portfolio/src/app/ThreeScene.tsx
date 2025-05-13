// components/ThreeScene.tsx
"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import * as THREE from 'three';

export default function Scene() {
  const { theme } = useTheme();

  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight 
        position={new THREE.Vector3(10, 10, 10)} 
        intensity={1.5}
        color={theme === 'dark' ? 0x7dd3fc : 0x0ea5e9}
      />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={2} 
      />
    </Canvas>
  );
}