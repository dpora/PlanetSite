import * as THREE from 'three'

export const planetData = [
  {
    name: 'Mercury',
    description: 'The closest planet to the Sun, with extreme temperature variations.',
    color: '#8C7853',
    size: 3.5,
    order: 1,
    orbitSpeed: 0.15,
    rotationSpeed: 0.002,
    link: '/planets/mercury',
    image: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?w=400&h=400&fit=crop'
  },
  {
    name: 'Venus',
    description: 'The hottest planet in our solar system, shrouded in thick clouds.',
    color: '#FFC649',
    size: 4.0,
    order: 2,
    orbitSpeed: 0.12,
    rotationSpeed: -0.0005,
    link: '/planets/venus',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=400&fit=crop'
  },
  {
    name: 'Earth',
    description: 'Our home planet, the only known planet with life.',
    color: '#6B93D6',
    size: 4.5,
    order: 3,
    orbitSpeed: 0.1,
    rotationSpeed: 0.05,
    link: '/planets/earth',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421789cd6?w=400&h=400&fit=crop'
  },
  {
    name: 'Mars',
    description: 'The Red Planet, known for its iron oxide surface and polar ice caps.',
    color: '#CD5C5C',
    size: 3.8,
    order: 4,
    orbitSpeed: 0.08,
    rotationSpeed: 0.04,
    link: '/planets/mars',
    image: 'https://images.unsplash.com/photo-1614732414444-096040ec8c86?w=400&h=400&fit=crop'
  },
  {
    name: 'Jupiter',
    description: 'The largest planet in our solar system, a gas giant with many moons.',
    color: '#D8CA9D',
    size: 8.5,
    order: 5,
    orbitSpeed: 0.04,
    rotationSpeed: 0.1,
    link: '/planets/jupiter',
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?w=400&h=400&fit=crop'
  },
  {
    name: 'Saturn',
    description: 'Famous for its spectacular ring system and low density.',
    color: '#FAD5A5',
    size: 7.8,
    order: 6,
    orbitSpeed: 0.03,
    rotationSpeed: 0.08,
    link: '/planets/saturn',
    image: 'https://images.unsplash.com/photo-1614732735969-1f2cfeb0b3a0?w=400&h=400&fit=crop'
  },
  {
    name: 'Uranus',
    description: 'An ice giant that rotates on its side with a unique tilt.',
    color: '#4FD0E7',
    size: 6.2,
    order: 7,
    orbitSpeed: 0.02,
    rotationSpeed: -0.05,
    link: '/planets/uranus',
    image: 'https://images.unsplash.com/photo-1614732735969-1f2cfeb0b3a0?w=400&h=400&fit=crop'
  },
  {
    name: 'Neptune',
    description: 'The windiest planet with the strongest storms in the solar system.',
    color: '#4B70DD',
    size: 6.0,
    order: 8,
    orbitSpeed: 0.015,
    rotationSpeed: 0.06,
    link: '/planets/neptune',
    image: 'https://images.unsplash.com/photo-1614732735969-1f2cfeb0b3a0?w=400&h=400&fit=crop'
  }
]

export const sunData = {
  name: 'Sun',
  description: 'The star at the center of our solar system. A massive ball of hot plasma held together by gravity, providing light and heat to all planets.',
  color: '#ff6b35',
  size: 15,
  order: 0,
  orbitSpeed: 0,
  rotationSpeed: 0.001,
  image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=400&fit=crop',
  type: 'star'
}
