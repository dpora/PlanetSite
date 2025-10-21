import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
// OrbitControls is provided inside SpaceScene; not used directly here
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { SpaceScene } from '../components/Space/SpaceScene'
import { CallComponent } from '../components/HighTechUI/CallComponent'
import { HighTechComponent } from '../components/HighTechUI/HighTechComponent'
import { InfoComponent }  from '../components/HighTechUI/InfoComponent'
import { planetData, sunData } from '../data/solarData'
import { BorderComponent } from '../components/HighTechUI/BorderComponent'
// import { AnimatedLightOrb } from '../components/HighTechUI/AnimatedLightOrb'
import { PlanetNavigation } from '../components/HighTechUI/PlanetNavigation'
// planet data is imported from '../data/solarData'

export const Home = () => {
  // Combine sun and planet data for navigation
  const allObjects = [sunData, ...planetData]
  const objectNames = allObjects.map(obj => obj.name)
  
  const [selectedIndex, setSelectedIndex] = useState(0) // Default to sun (index 0)
  const selectedObject = allObjects[selectedIndex]
  const focusTarget = selectedObject.name

  const handleNavigation = (newIndex) => {
    setSelectedIndex(newIndex)
  }

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 50, 150], far: 200000 }}>
        <color attach='background' args={['black']} />
        <ambientLight intensity={0.25} />

        <SpaceScene focusTarget={focusTarget} />

        <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
      </Canvas>

      <BorderComponent />
      <InfoComponent selectedObject={selectedObject} />
      <HighTechComponent />
      <CallComponent />
      
      {/* Planet Navigation */}
      <PlanetNavigation 
        currentIndex={selectedIndex}
        totalItems={allObjects.length}
        onNavigate={handleNavigation}
        objectNames={objectNames}
      />
      
      {/* GSAP Animated Light Orb */}
      {/* <AnimatedLightOrb /> */}
    </div>
  );
};