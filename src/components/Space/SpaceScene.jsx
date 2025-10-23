import { useRef, useEffect } from 'react'
import { Stars, OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Sun } from './Sun'
import { Planets } from './Planets'
import { planetData } from '../../data/solarData'

export const SpaceScene = ({ focusTarget }) => {
  const controlsRef = useRef()
  const sunRef = useRef()
  const planetsRef = useRef()
  const { camera } = useThree()
  const currentFocusTarget = useRef(null)
  const transitionData = useRef({
    isTransitioning: false,
    startTime: 0,
    duration: 1500,
    startCameraPos: null,
    startTargetPos: null,
    endCameraPos: null,
    endTargetPos: null
  })

  // Function to get planet position by name
  const getPlanetPosition = (planetName) => {
    if (!planetsRef.current) return null
    
    // Get planet order from solarData
    const planet = planetData.find(p => p.name === planetName)
    if (!planet) return null
    
    const order = planet.order

    // Get the actual planet group from the scene
    const planetGroup = planetsRef.current.children[order - 1] // 0-indexed
    if (!planetGroup) return null

    // Get the planet mesh group which is positioned at orbit distance
    const planetMeshGroup = planetGroup.children[0] // The group positioned at orbit distance
    if (!planetMeshGroup) return null

    // Get world position of the planet mesh group
    const worldPosition = new THREE.Vector3()
    planetMeshGroup.getWorldPosition(worldPosition)
    
    return worldPosition
  }

  // Smooth easing function for transitions
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  // Update OrbitControls target when focus target changes
  useEffect(() => {
    if (!controlsRef.current || !focusTarget) return
    if (focusTarget === currentFocusTarget.current) return

    currentFocusTarget.current = focusTarget

    let endTargetPosition
    let cameraDistance = 35

    if (focusTarget === 'Sun' || focusTarget === 'About Me') {
      endTargetPosition = new THREE.Vector3(0, 0, 0)
      cameraDistance = 45
    } else {
      endTargetPosition = getPlanetPosition(focusTarget)
      if (!endTargetPosition) return
      cameraDistance = 15 // Closer orbit around planets
    }

    // Immediately set the target to the planet center
    controlsRef.current.target.copy(endTargetPosition)
    
    // Calculate camera position to orbit around the target
    // Position camera at a good viewing angle
    const angle = Math.PI * 0.25 // 45 degrees
    const height = cameraDistance * 0.3
    const radius = cameraDistance * Math.cos(angle)
    
    const endCameraPosition = new THREE.Vector3(
      endTargetPosition.x + radius,
      endTargetPosition.y + height,
      endTargetPosition.z + radius
    )

    // Set up transition data for smooth camera movement
    const currentTarget = controlsRef.current.target.clone()
    transitionData.current = {
      isTransitioning: true,
      startTime: Date.now(),
      duration: 1500,
      startCameraPos: camera.position.clone(),
      startTargetPos: currentTarget.clone(),
      endCameraPos: endCameraPosition,
      endTargetPos: endTargetPosition.clone()
    }
  }, [focusTarget, camera])

  // Continuously update target position for moving planets and handle transitions
  useFrame(() => {
    if (!controlsRef.current || !currentFocusTarget.current) return
    
    // Handle smooth transitions between planets
    if (transitionData.current.isTransitioning) {
      const elapsed = Date.now() - transitionData.current.startTime
      const t = Math.min(elapsed / transitionData.current.duration, 1)
      const easedT = easeInOutCubic(t)
      
      // Interpolate camera and target positions
      const currentCameraPos = new THREE.Vector3().lerpVectors(
        transitionData.current.startCameraPos,
        transitionData.current.endCameraPos,
        easedT
      )
      
      const currentTargetPos = new THREE.Vector3().lerpVectors(
        transitionData.current.startTargetPos,
        transitionData.current.endTargetPos,
        easedT
      )
      
      // Apply the interpolated positions
      camera.position.copy(currentCameraPos)
      controlsRef.current.target.copy(currentTargetPos)
      
      // Ensure controls are updated after setting target
      controlsRef.current.update()
      
      // Check if transition is complete
      if (t >= 1) {
        transitionData.current.isTransitioning = false
        // Ensure final target is set precisely
        controlsRef.current.target.copy(transitionData.current.endTargetPos)
        controlsRef.current.update()
      }
      
      return
    }
    
    // Normal tracking behavior (when not transitioning)
    if (currentFocusTarget.current === 'Sun' || currentFocusTarget.current === 'About Me') {
      // For sun, keep target at center
      const sunPosition = new THREE.Vector3(0, 0, 0)
      controlsRef.current.target.lerp(sunPosition, 0.05)
    } else {
      // For planets, compute a predicted position to reduce trailing
      const planetName = currentFocusTarget.current
      const currentPosition = getPlanetPosition(planetName)
      if (!currentPosition) return

      camera.position.sub(controlsRef.current.target);
      controlsRef.current.target.copy(currentPosition);
      camera.position.add(currentPosition);
    }
    
    controlsRef.current.update()
  })

  return (
    <>
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
      
      {/* Orbit controls for camera movement */}
      <OrbitControls 
        ref={controlsRef}
        enableDamping={true}
        dampingFactor={0.08}
        minDistance={8}
        maxDistance={500}
        target={[0, 0, 0]}
        enablePan={true}
        panSpeed={0.5}
        rotateSpeed={0.5}
        zoomSpeed={0.8}
        makeDefault
      />
      
      {/* Single magma sun */}
      <Sun ref={sunRef} position={[0, 0, 0]} scale={1} />
      
      {/* Planet system */}
      <Planets ref={planetsRef} sunPosition={[0, 0, 0]} />
    </>
  );
};