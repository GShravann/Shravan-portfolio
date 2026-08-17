import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function NeuralSphere({ mouseX, mouseY }: { mouseX: React.MutableRefObject<number>; mouseY: React.MutableRefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.12 + mouseX.current * 0.5;
    meshRef.current.rotation.x = Math.sin(t * 0.08) * 0.2 + mouseY.current * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.1}
          metalness={0.6}
          emissive="#4C1D95"
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

function ParticleNodes() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 1.5;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#22D3EE" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function RingOrbit({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.getElapsedTime() * speed;
    ref.current.rotation.x = Math.PI / 3 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.008, 8, 80]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

interface NeuralCoreProps {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}

export default function NeuralCore({ mouseX, mouseY }: NeuralCoreProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#8B5CF6" intensity={2} />
      <pointLight position={[-5, -3, -5]} color="#22D3EE" intensity={1.5} />
      <pointLight position={[0, 4, 0]} color="#FFFFFF" intensity={0.5} />

      <NeuralSphere mouseX={mouseX} mouseY={mouseY} />
      <ParticleNodes />
      <RingOrbit radius={2.6} speed={0.3} color="#8B5CF6" />
      <RingOrbit radius={3.2} speed={-0.2} color="#22D3EE" />
      <RingOrbit radius={3.8} speed={0.15} color="#60A5FA" />
    </Canvas>
  );
}
