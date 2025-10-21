import { useEffect, useState, useRef } from 'react'

export const CursorPet = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const previousAngleRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        // Smooth following effect - lerp (linear interpolation)
        const speed = 0.1 // Lower = slower/smoother, Higher = faster/more direct
        const dx = targetPosition.x - prevPosition.x
        const dy = targetPosition.y - prevPosition.y

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

        return {
          x: prevPosition.x + dx * speed,
          y: prevPosition.y + dy * speed
        }
      })
    }

    const animationFrame = requestAnimationFrame(function loop() {
      animate()
      requestAnimationFrame(loop)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [targetPosition])

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x - 25, // Center the image on cursor (adjust based on image size)
        top: position.y - 25, // Center the image on cursor (adjust based on image size)
        pointerEvents: 'none', // Don't interfere with mouse events
        zIndex: 9999, // Always on top
        transform: `rotate(${rotation}deg)`
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
  )
}
