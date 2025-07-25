'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { useTheme } from '@/context/ThemeContext';

export default function Scene() {
  const { theme } = useTheme();

  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color={theme === 'dark' ? '#7dd3fc' : '#0ea5e9'}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
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