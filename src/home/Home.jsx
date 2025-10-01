import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { SpaceScene } from '../components/SpaceScene'
import { CallComponent, HighTechComponent, InfoComponent, BorderComponent } from '../components/SvgHud'
import { AnimatedLightOrb } from '../components/AnimatedLightOrb'

export const Home = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <Canvas camera={{ position: [0, 50, 150], far: 200000 }}>
      <color attach='background' args={['black']} />
      <ambientLight intensity={0.25} />

      <OrbitControls maxDistance={450} minDistance={50} makeDefault enableDamping enableRotate enableZoom enablePan={false} />

      <SpaceScene />

      <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>

    <BorderComponent />
    <InfoComponent />
    <HighTechComponent />
    <CallComponent />
    
    {/* GSAP Animated Light Orb */}
    <AnimatedLightOrb />
  </div>
);