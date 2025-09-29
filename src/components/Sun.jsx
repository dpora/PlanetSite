import { useRef } from 'react'
import { RigidBody } from '@react-three/rapier'

export const Sun = () => {
    
    return (
        <RigidBody colliders='ball' userData={{ type: 'Sun' }} type='kinematicPosition' >
            <mesh>
                <sphereGeometry args={[10, 32, 32]} />
                <meshStandardMaterial color={'rgb(255, 207, 55)'} />
            </mesh>

            <pointLight position={[0, 0, 0]} intensity={1000} color={'rgb(255, 207, 55)'} />
        </RigidBody>
    )
}
