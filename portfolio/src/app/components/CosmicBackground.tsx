'use client';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

const NebulaParticles = () => {
  const particles = new THREE.BufferGeometry();
  const positions = [];
  
  for(let i = 0; i < 5000; i++) {
    positions.push(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    );
  }

  particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  return (
    <points geometry={particles}>
      <pointsMaterial 
        size={0.005} 
        color={useTheme().theme === 'dark' ? '#7dd3fc' : '#0ea5e9'}
        transparent 
        opacity={0.8}
      />
    </points>
  );
};

export default function CosmicBackground() {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Stars radius={150} depth={60} count={8000} factor={6} fade speed={2} />
      <NebulaParticles />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
      <Text
        position={[-3, 1, 0]}
        fontSize={1.2}
        color={useTheme().theme === 'dark' ? 'white' : 'black'}
      >
        MODISA
      </Text>
    </Canvas>
  );
}