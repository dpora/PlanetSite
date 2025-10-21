import { useEffect, useState, useRef } from 'react'

export const CursorPet = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [driftAngle, setDriftAngle] = useState(0)
  const [overshoot, setOvershoot] = useState(0)
  const [tireMarks, setTireMarks] = useState([])
  const [smokeParticles, setSmokeParticles] = useState([])
  const targetPositionRef = useRef({ x: 0, y: 0 })
  const previousAngleRef = useRef(0)
  const previousDiffRef = useRef(0)
  const velocityRef = useRef(0)
  const driftAngleRef = useRef(0)
  const markIdRef = useRef(0)
  const smokeIdRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetPositionRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        const targetPosition = targetPositionRef.current
        const dx = targetPosition.x - prevPosition.x
        const dy = targetPosition.y - prevPosition.y
        
        // Calculate distance to cursor
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Stop zone - car stops when within this distance
        const stopDistance = 50
        
        // If we're close enough, stop moving
        if (distance < stopDistance) {
          // Still update rotation and effects, but don't move
          const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 180
          let currentRotation = previousAngleRef.current
          
          const normalizeAngle = (angle) => {
            angle = angle % 360
            if (angle < 0) angle += 360
            return angle
          }
          
          const normalizedCurrent = normalizeAngle(currentRotation)
          const normalizedTarget = normalizeAngle(targetAngle)
          
          let diff = normalizedTarget - normalizedCurrent
          
          if (diff > 180) {
            diff -= 360
          } else if (diff < -180) {
            diff += 360
          }
          
          const rotationSpeed = 0.15
          const newRotation = currentRotation + diff * rotationSpeed
          
          previousAngleRef.current = newRotation
          setRotation(newRotation)
          
          // Gradually reduce drift and overshoot when stopped
          const currentDrift = previousDiffRef.current
          const newDrift = currentDrift * 0.9
          previousDiffRef.current = newDrift
          setDriftAngle(newDrift)
          
          const currentVelocity = velocityRef.current
          const newVelocity = currentVelocity * 0.9
          velocityRef.current = newVelocity
          setOvershoot(newVelocity)
          
          return prevPosition // Don't move
        }
        
        // Constant speed movement towards cursor
        const baseSpeed = 8 // Pixels per frame - constant movement speed
        const speedMultiplier = Math.min(distance / 100, 1) // Slow down as we approach
        const actualSpeed = baseSpeed * speedMultiplier
        
        // Calculate movement direction (normalized)
        const moveX = (dx / distance) * actualSpeed
        const moveY = (dy / distance) * actualSpeed

        // Calculate target angle in degrees
        let targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 180

        // Get the previous rotation value
        let currentRotation = previousAngleRef.current
        
        // Normalize both angles to 0-360 range for calculation
        const normalizeAngle = (angle) => {
          angle = angle % 360
          if (angle < 0) angle += 360
          return angle
        }
        
        const normalizedCurrent = normalizeAngle(currentRotation)
        const normalizedTarget = normalizeAngle(targetAngle)
        
        // Calculate difference and find shortest path
        let diff = normalizedTarget - normalizedCurrent
        
        // Take the shortest path around the circle
        if (diff > 180) {
          diff -= 360
        } else if (diff < -180) {
          diff += 360
        }
        
        // Apply smooth rotation - add the difference to the ACTUAL current rotation
        // This allows rotation to accumulate beyond 360 degrees
        const rotationSpeed = 0.15
        const newRotation = currentRotation + diff * rotationSpeed
        
        previousAngleRef.current = newRotation
        setRotation(newRotation)

        // Calculate drift angle based on rotation change
        // The faster the car turns, the more it drifts
        const rotationChange = diff * rotationSpeed
        const driftIntensity = 250 // Adjust this to control how much the car drifts
        const maxDrift = 25 // Maximum drift angle in degrees
        
        // Smooth the drift angle
        const targetDrift = Math.max(-maxDrift, Math.min(maxDrift, rotationChange * driftIntensity))
        const currentDrift = previousDiffRef.current
        const driftSpeed = 0.15 // Lower value = smoother, more gradual transitions
        const newDrift = currentDrift + (targetDrift - currentDrift) * driftSpeed
        
        previousDiffRef.current = newDrift
        setDriftAngle(newDrift)
        driftAngleRef.current = newDrift

        // Add overshoot momentum effect
        // Calculate velocity based on rotation change
        const currentVelocity = velocityRef.current
        const acceleration = rotationChange * 20 // How much velocity builds up
        const damping = .5 // How quickly the overshoot settles (lower = settles faster)
        
        // Update velocity with acceleration and damping
        const newVelocity = (currentVelocity + acceleration) * damping
        velocityRef.current = newVelocity
        
        // Overshoot is the accumulated velocity
        setOvershoot(newVelocity)

        // Generate tire marks and smoke when drifting
        const driftThreshold = 5 // Minimum drift angle to create effects
        if (Math.abs(newDrift) > driftThreshold && distance > stopDistance) {
          // Calculate tire positions relative to car center
          const tireSpacing = 15 // Distance from center to each tire
          const carAngleRad = (newRotation + driftAngleRef.current + newVelocity) * (Math.PI / 180)
          
          // Calculate movement direction (where the car is actually moving)
          const movementAngle = Math.atan2(moveY, moveX) * (180 / Math.PI) + 90
          
          // Left tire position
          const leftTireX = prevPosition.x + Math.cos(carAngleRad + Math.PI / 2) * tireSpacing
          const leftTireY = prevPosition.y + Math.sin(carAngleRad + Math.PI / 2) * tireSpacing
          
          // Right tire position
          const rightTireX = prevPosition.x + Math.cos(carAngleRad - Math.PI / 2) * tireSpacing
          const rightTireY = prevPosition.y + Math.sin(carAngleRad - Math.PI / 2) * tireSpacing
          
          // Add tire marks for both tires
          // Use movement angle instead of car rotation for realistic skid marks
          const leftMark = {
            id: markIdRef.current++,
            x: leftTireX,
            y: leftTireY,
            rotation: movementAngle,
            opacity: 1,
            timestamp: Date.now()
          }
          
          const rightMark = {
            id: markIdRef.current++,
            x: rightTireX,
            y: rightTireY,
            rotation: movementAngle,
            opacity: 1,
            timestamp: Date.now()
          }
          
          setTireMarks(prev => [...prev, leftMark, rightMark])
          
          // Add smoke particles (spawn multiple for better effect)
          if (Math.random() > 0.5) { // 50% chance each frame to add smoke
            const smokeCount = 2
            const newSmoke = Array.from({ length: smokeCount }, () => ({
              id: smokeIdRef.current++,
              x: prevPosition.x + (Math.random() - 0.5) * 20,
              y: prevPosition.y + (Math.random() - 0.5) * 20,
              opacity: 0.6,
              scale: 0.5 + Math.random() * 0.5,
              velocityX: (Math.random() - 0.5) * 2,
              velocityY: (Math.random() - 0.5) * 2,
              timestamp: Date.now()
            }))
            
            setSmokeParticles(prev => [...prev, ...newSmoke])
          }
        }

        return {
          x: prevPosition.x + moveX,
          y: prevPosition.y + moveY
        }
      })
    }

    const animationFrame = requestAnimationFrame(function loop() {
      animate()
      requestAnimationFrame(loop)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  // Cleanup old tire marks and smoke particles
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now()
      const markLifetime = 2000 // 2 seconds
      const smokeLifetime = 1000 // 1 second
      
      setTireMarks(prev => prev.filter(mark => now - mark.timestamp < markLifetime))
      setSmokeParticles(prev => prev.filter(smoke => now - smoke.timestamp < smokeLifetime))
    }, 100)
    
    return () => clearInterval(cleanup)
  }, [])

  return (
    <>
      {/* Tire Marks */}
      {tireMarks.map(mark => {
        const age = Date.now() - mark.timestamp
        const lifetime = 2000
        const opacity = Math.max(0, 1 - (age / lifetime))
        
        return (
          <div
            key={mark.id}
            style={{
              position: 'fixed',
              left: mark.x - 1.5,
              top: mark.y - 8,
              width: '3px',
              height: '16px',
              background: `rgba(40, 40, 40, ${opacity * 0.5})`,
              borderRadius: '1.5px',
              pointerEvents: 'none',
              zIndex: 9998,
              transform: `rotate(${mark.rotation}deg)`
            }}
          />
        )
      })}

      {/* Smoke Particles */}
      {smokeParticles.map(smoke => {
        const age = Date.now() - smoke.timestamp
        const lifetime = 1000
        const opacity = Math.max(0, smoke.opacity * (1 - (age / lifetime)))
        const scale = smoke.scale + (age / lifetime) * 0.5
        
        return (
          <div
            key={smoke.id}
            style={{
              position: 'fixed',
              left: smoke.x + smoke.velocityX * (age / 50),
              top: smoke.y + smoke.velocityY * (age / 50),
              width: '10px',
              height: '10px',
              background: `radial-gradient(circle, rgba(200, 200, 200, ${opacity}) 0%, rgba(150, 150, 150, ${opacity * 0.5}) 50%, transparent 100%)`,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9998,
              transform: `scale(${scale})`,
              filter: 'blur(2px)'
            }}
          />
        )
      })}

      {/* Car */}
      <div
        style={{
          position: 'fixed',
          left: position.x - 25, // Center the image on cursor (adjust based on image size)
          top: position.y - 25, // Center the image on cursor (adjust based on image size)
          pointerEvents: 'none', // Don't interfere with mouse events
          zIndex: 9999, // Always on top
          transform: `rotate(${rotation + driftAngle + overshoot}deg)` // Combine rotation with drift and overshoot
        }}
      >
        <img 
          src="/PlanetSite/miataTop.svg" 
          alt="Cursor pet"
          style={{
            width: 'auto',
            height: '50px',
            display: 'block',
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
          }}
        />
      </div>
    </>
  )
}
