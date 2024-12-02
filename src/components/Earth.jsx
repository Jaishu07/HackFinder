import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function Earth() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Sphere args={[2, 64, 64]} position={[0, 0, 0]} scale={[1, 1, 1]}>
        <MeshDistortMaterial
          color="#4ABEFF"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.9}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          ambient={0.5}
        />
      </Sphere>
    </>
  );
}

export default Earth;
