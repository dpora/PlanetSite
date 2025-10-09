/* eslint-disable react/no-unknown-property */
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Planet = ({ 
  color, 
  size, 
  order, 
  orbitSpeed, 
  rotationSpeed, 
  sunPosition = [0, 0, 0]
}) => {
  const planetRef = useRef()
  const orbitRef = useRef()

  // Calculate orbit radius based on order (distance from sun)
  const orbitRadius = 30 + (order * 25) // Base distance + order multiplier
  
  useFrame(() => {
    if (orbitRef.current) {
      // Orbit around the sun
      orbitRef.current.rotation.y += orbitSpeed * 0.01
    }
    
    if (planetRef.current) {
      // Planet rotation on its own axis
      planetRef.current.rotation.y += rotationSpeed * 0.01
    }
  })

  return (
    <group ref={orbitRef} position={sunPosition}>
      {/* Planet positioned at orbit distance */}
      <group position={[orbitRadius, 0, 0]}>
        <mesh 
          ref={planetRef}
          scale={size}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial 
            color={color}
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {/* Ambient light for planet visibility */}
        <pointLight 
          position={[0, 0, 0]} 
          intensity={50} 
          color={color}
          distance={10}
          decay={2}
        />
      </group>

      {/* Orbit path visualization (optional) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[orbitRadius - 0.1, orbitRadius + 0.1, 64]} />
        <meshBasicMaterial 
          color="#333333" 
          transparent 
          opacity={0.2} 
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}