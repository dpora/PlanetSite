/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const ORBIT_SPEED_SCALE = 0.6
const ROTATION_SPEED_SCALE = 0.6

export const Planet = ({ 
  color, 
  size, 
  order, 
  orbitSpeed, 
  rotationSpeed, 
  sunPosition = [0, 0, 0],
  modelUrl,
  modelScale = 1,
  modelRotation = [0, 0, 0],
  modelPosition = [0, 0, 0]
}) => {
  const planetRef = useRef()
  const orbitRef = useRef()

  // Calculate orbit radius based on order (distance from sun)
  const orbitRadius = 30 + (order * 25) // Base distance + order multiplier
  const hasCustomModel = Boolean(modelUrl)
  const baseScale = size ?? 1

  useEffect(() => {
    if (modelUrl) {
      useGLTF.preload(modelUrl)
    }
  }, [modelUrl])
  
  useFrame((_, delta) => {
    if (orbitRef.current) {
      // Orbit around the sun (orbitSpeed expressed in radians per second)
      orbitRef.current.rotation.y += orbitSpeed * ORBIT_SPEED_SCALE * delta
    }
    
    if (planetRef.current) {
      // Planet rotation on its own axis
      planetRef.current.rotation.y += rotationSpeed * ROTATION_SPEED_SCALE * delta
    }
  })

  return (
    <group ref={orbitRef} position={sunPosition}>
      {/* Planet positioned at orbit distance */}
      <group position={[orbitRadius, 0, 0]}>
        <group ref={planetRef} scale={baseScale}>
          {hasCustomModel ? (
            <Suspense fallback={<DefaultPlanetMesh color={color} />}> 
              <group scale={modelScale} rotation={modelRotation} position={modelPosition}>
                <PlanetModel url={modelUrl} />
              </group>
            </Suspense>
          ) : (
            <DefaultPlanetMesh color={color} />
          )}
        </group>

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

const DefaultPlanetMesh = ({ color }) => (
  <mesh>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial 
      color={color}
      roughness={0.8}
      metalness={0.2}
    />
  </mesh>
)

const PlanetModel = ({ url }) => {
  const gltf = useGLTF(url)
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene])

  return <primitive object={scene} dispose={null} />
}
