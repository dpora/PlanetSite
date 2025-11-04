import { useRef, useEffect } from 'react'
import { Stars, OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Sun } from './Sun'
import { Planets } from './Planets'
import { planetData } from '../../data/solarData'

const ORBIT_SPEED_SCALE = 0.6
const ROTATION_SPEED_PER_SECOND = Math.PI
const CAMERA_MOVE_SPEED = 35
const MIN_ROTATE_DURATION = 120
const MAX_ROTATE_DURATION = 1200
const MIN_MOVE_DURATION = 300
const MAX_MOVE_DURATION = 2000
const TARGET_LEAD_TIME = -0.08 // seconds to look ahead beyond travel time

const fallbackDirection = () => new THREE.Vector3(0, 0, -1)

export const SpaceScene = ({ focusTarget }) => {
  const controlsRef = useRef()
  const sunRef = useRef()
  const planetsRef = useRef()
  const { camera } = useThree()
  const currentFocusTarget = useRef(null)
  const transitionData = useRef({
    isTransitioning: false,
    startTime: 0,
    orientDuration: 600,
    moveDuration: 900,
    startCameraPos: null,
    startTargetPos: null,
    desiredDistance: 20,
    directionFromTarget: fallbackDirection(),
    focusTarget: null,
    isSun: false,
    lastTargetPos: null,
    hasLockedDirection: false
  })

  // Function to get planet position by name
  const getPlanetPosition = (planetName, timeAhead = 0) => {
    if (!planetsRef.current) return null
    
    // Get planet order from solarData
    const planetIndex = planetData.findIndex(p => p.name === planetName)
    if (planetIndex === -1) return null
    const planet = planetData[planetIndex]
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

    if (!timeAhead || planet.orbitSpeed === 0) {
      return worldPosition
    }

    // Predict future position by rotating the current offset around the orbit axis
    const orbitCenter = new THREE.Vector3()
    planetGroup.getWorldPosition(orbitCenter)

    const currentOffset = worldPosition.clone().sub(orbitCenter)
    if (currentOffset.lengthSq() === 0) {
      return worldPosition
    }

    const angularVelocity = planet.orbitSpeed * ORBIT_SPEED_SCALE // radians per second
    const predictedOffset = currentOffset
      .clone()
      .applyAxisAngle(new THREE.Vector3(0, 1, 0), angularVelocity * timeAhead)

    return orbitCenter.add(predictedOffset)
  }

  // Smooth easing function for transitions
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

  // Update OrbitControls target when focus target changes
  useEffect(() => {
    if (!controlsRef.current || !focusTarget) return
    if (focusTarget === currentFocusTarget.current) return

    currentFocusTarget.current = focusTarget

    const isSun = focusTarget === 'Sun' || focusTarget === 'About Me'
    const currentCameraPos = camera.position.clone()
    const currentTargetPos = controlsRef.current.target.clone()

    const desiredDistance = isSun ? 45 : 15

    const computePlan = (targetPosition) => {
      const desiredDirection = targetPosition.clone().sub(currentCameraPos)
      const targetDistance = desiredDirection.length()
      if (targetDistance === 0) {
        desiredDirection.set(0, 0, -1)
      } else {
        desiredDirection.normalize()
      }

      const currentDirection = currentTargetPos.clone().sub(currentCameraPos)
      if (currentDirection.lengthSq() === 0) {
        currentDirection.set(0, 0, -1)
      } else {
        currentDirection.normalize()
      }

      const angleDifference = currentDirection.angleTo(desiredDirection)
      const orientDuration = clamp(
        (angleDifference / ROTATION_SPEED_PER_SECOND) * 1000,
        MIN_ROTATE_DURATION,
        MAX_ROTATE_DURATION
      )

      const finalDistanceFromTarget = Math.min(targetDistance, desiredDistance)
      const endCameraPosition = targetPosition.clone().add(
        desiredDirection.clone().multiplyScalar(-finalDistanceFromTarget)
      )
      const directionFromTarget = endCameraPosition.clone().sub(targetPosition)
      if (directionFromTarget.lengthSq() === 0) {
        directionFromTarget.copy(fallbackDirection())
      } else {
        directionFromTarget.normalize()
      }

      const distanceToTravel = currentCameraPos.distanceTo(endCameraPosition)
      const moveDuration = distanceToTravel === 0
        ? 0
        : clamp(
            (distanceToTravel / CAMERA_MOVE_SPEED) * 1000,
            MIN_MOVE_DURATION,
            MAX_MOVE_DURATION
          )

      return {
        orientDuration: Math.max(orientDuration, 1),
        moveDuration,
        endCameraPosition,
        directionFromTarget,
        desiredDistance: finalDistanceFromTarget
      }
    }

    const resolvePlanWithPrediction = () => {
      let targetPosition
      if (isSun) {
        targetPosition = new THREE.Vector3(0, 0, 0)
      } else {
        targetPosition = getPlanetPosition(focusTarget)
        if (!targetPosition) return null
      }

      let plan = computePlan(targetPosition)

      if (!isSun) {
        for (let i = 0; i < 2; i++) {
          const totalTimeSeconds = (plan.orientDuration + plan.moveDuration) / 1000 + TARGET_LEAD_TIME
          const predictedTarget = getPlanetPosition(focusTarget, totalTimeSeconds)
          if (!predictedTarget) break
          targetPosition = predictedTarget
          plan = computePlan(targetPosition)
        }
      }

      return { plan, targetPosition }
    }

    const result = resolvePlanWithPrediction()
    if (!result) return

    const { plan, targetPosition } = result
    const orientDurationMs = plan.orientDuration
    const moveDurationMs = Math.max(plan.moveDuration, 1)

    transitionData.current = {
      isTransitioning: true,
      startTime: Date.now(),
      orientDuration: orientDurationMs,
      moveDuration: moveDurationMs,
      startCameraPos: currentCameraPos,
      startTargetPos: currentTargetPos,
      desiredDistance: plan.desiredDistance,
      directionFromTarget: plan.directionFromTarget.clone(),
      focusTarget,
      isSun,
      lastTargetPos: targetPosition.clone(),
      hasLockedDirection: false
    }
  }, [focusTarget, camera])

  // Continuously update target position for moving planets and handle transitions
  useFrame(() => {
    if (!controlsRef.current || !currentFocusTarget.current) return
    
    // Handle smooth transitions between planets
    if (transitionData.current.isTransitioning) {
      const data = transitionData.current
      const elapsed = Date.now() - data.startTime

      const rotateProgress = data.orientDuration <= 0
        ? 1
        : Math.min(elapsed / data.orientDuration, 1)
      const moveElapsed = Math.max(0, elapsed - data.orientDuration)
      const moveProgress = data.moveDuration <= 0
        ? 1
        : Math.min(moveElapsed / data.moveDuration, 1)

      const easedRotate = easeInOutCubic(rotateProgress)
      const easedMove = easeInOutCubic(moveProgress)

      let targetGoal
      if (data.isSun) {
        targetGoal = new THREE.Vector3(0, 0, 0)
      } else {
        const remainingMoveTime = data.moveDuration <= 0 ? 0 : Math.max(data.moveDuration - moveElapsed, 0) / 1000
        const remainingRotateTime = data.orientDuration <= 0 ? 0 : Math.max(data.orientDuration - elapsed, 0) / 1000
        const timeAhead = Math.max(0, remainingMoveTime + remainingRotateTime + TARGET_LEAD_TIME)
        targetGoal = getPlanetPosition(data.focusTarget, timeAhead)
        if (!targetGoal) {
          targetGoal = data.lastTargetPos ? data.lastTargetPos.clone() : data.startTargetPos.clone()
        }
      }
      if (!targetGoal) {
        targetGoal = new THREE.Vector3(0, 0, 0)
      }
      data.lastTargetPos = targetGoal.clone()

      const currentTargetPos = new THREE.Vector3().lerpVectors(
        data.startTargetPos,
        targetGoal,
        easedRotate
      )

      let directionFromTarget = data.directionFromTarget
      if (!directionFromTarget || directionFromTarget.lengthSq() === 0) {
        directionFromTarget = fallbackDirection()
        data.directionFromTarget = directionFromTarget.clone()
      }

      if (!data.hasLockedDirection && rotateProgress >= 1) {
        directionFromTarget = data.startCameraPos.clone().sub(targetGoal)
        if (directionFromTarget.lengthSq() === 0) {
          directionFromTarget = fallbackDirection()
        } else {
          directionFromTarget.normalize()
        }
        data.directionFromTarget = directionFromTarget.clone()
        data.hasLockedDirection = true
      }

      const desiredCameraPos = targetGoal.clone().add(directionFromTarget.clone().multiplyScalar(data.desiredDistance))

      const currentCameraPos = new THREE.Vector3().lerpVectors(
        data.startCameraPos,
        desiredCameraPos,
        easedMove
      )

      camera.position.copy(currentCameraPos)
      controlsRef.current.target.copy(currentTargetPos)
      controlsRef.current.update()

      if (rotateProgress >= 1 && moveProgress >= 1) {
        data.isTransitioning = false
        data.hasLockedDirection = false
        controlsRef.current.target.copy(targetGoal)
        camera.position.copy(desiredCameraPos)
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