import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const SPEED_X = 0.05
const SPEED_Y = 0.15
const SPEED_Z = 0.10

export const RotatingCube = ({ position = [0, 0, 0], size = 10 }) => {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * SPEED_X * Math.PI * 2
      meshRef.current.rotation.y += delta * SPEED_Y * Math.PI * 2
      meshRef.current.rotation.z += delta * SPEED_Z * Math.PI * 2
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshBasicMaterial color="white" wireframe={true} />
    </mesh>
  )
}