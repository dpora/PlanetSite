import { Stars } from '@react-three/drei'
import { Sun } from './Sun'

export const SpaceScene = () => {
  return (
    <>
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
      
      {/* Single magma sun */}
      <Sun position={[0, 0, 0]} scale={1} />
    </>
  );
};