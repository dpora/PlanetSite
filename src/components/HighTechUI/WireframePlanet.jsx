import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const WireframeSphere = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      // Auto-rotate the wireframe
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#69D88E" wireframe={true} />
    </mesh>
  )
}

export const WireframePlanet = ({ left = '94px', top = '419px', width = '124px', height = '39px' }) => {
  return (
    <div className="absolute" style={{ left, top, width, height, zIndex: 3, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <WireframeSphere />
      </Canvas>
    </div>
  )
}
