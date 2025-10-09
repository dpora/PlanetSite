import { forwardRef } from 'react'
import { Planet } from './Planet'
import { planetData } from '../../data/solarData'

export const Planets = forwardRef(({ sunPosition = [0, 0, 0] }, ref) => {
  return (
    <group ref={ref}>
      {planetData.map((planet, index) => (
        <Planet
          key={index}
          name={planet.name}
          description={planet.description}
          color={planet.color}
          size={planet.size}
          order={planet.order}
          orbitSpeed={planet.orbitSpeed}
          rotationSpeed={planet.rotationSpeed}
          link={planet.link}
          image={planet.image}
          sunPosition={sunPosition}
        />
      ))}
    </group>
  )
})

Planets.displayName = 'Planets'

// planetData comes from ../../data/solarData