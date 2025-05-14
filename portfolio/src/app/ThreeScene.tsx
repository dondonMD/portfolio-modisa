'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';
import * as THREE from 'three';

const CosmicBackground = () => {
  const { theme } = useTheme();
  const count = 5000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = (Math.random() - 0.5) * 100;
    positions[i + 2] = (Math.random() - 0.5) * 100;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={theme === 'dark' ? '#7dd3fc' : '#0ea5e9'}
        transparent
        opacity={0.8}
      />
    </points>
  );
};

export default function Scene() {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <CosmicBackground />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <Text
        position={[0, 0, -10]}
        color={useTheme().theme === 'dark' ? 'white' : 'black'}
        fontSize={2}
      >
        MODISA
      </Text>
    </Canvas>
  );
}