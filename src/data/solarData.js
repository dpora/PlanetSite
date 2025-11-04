// modelUrl, modelScale, modelRotation, and modelPosition are optional and enable loading glTF/GLB assets per planet.
const withBase = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${normalizedBase}/${normalizedPath}`
}

export const planetData = [
  {
    name: 'BabySweng',
    description: '2025 Penn State Behrend Hackathon. Category: Health & Wellness. Position: 2nd. Tomagotchi-inspired app that promotes mental well-being through interactive care and companionship.',
    color: '#8C7853',
    size: 3.5,
    order: 1,
    orbitSpeed: 0.15,
    rotationSpeed: 2,
    link: 'https://github.com/BehrendSpring25/baby-sweng-haven_team22', // Example external link
    external: true, // Flag to indicate external link
    image: withBase('BabySweng.png'),
    modelUrl: withBase('models/BabySweng.glb'),
    modelRotation: [Math.PI / 2, Math.PI, 0],
  },
  {
    name: 'Venus',
    description: 'The hottest planet in our solar system, shrouded in thick clouds.',
    color: '#FFC649',
    size: 4.0,
    order: 2,
    orbitSpeed: 0.182,
    rotationSpeed: -0.5,
    link: '/planets/venus',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=400&fit=crop',
    modelUrl: withBase('models/Planet1.glb'),
    modelScale: 0.2,
  },
  {
    name: 'Plearth',
    description: 'Our home planet, the only known planet with life.',
    color: '#6B93D6',
    size: 4.5,
    order: 3,
    orbitSpeed: 0.1,
    rotationSpeed: 0.05,
    link: '/planets/plearth',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421789cd6?w=400&h=400&fit=crop',
    modelUrl: withBase('models/Planet2.glb'),
    modelScale: 0.2,
  },
  {
    name: 'Jars',
    description: 'The Red Planet, known for its iron oxide surface and polar ice caps.',
    color: '#CD5C5C',
    size: 3.8,
    order: 4,
    orbitSpeed: 0.08,
    rotationSpeed: 0.04,
    link: '/planets/jars',
    image: 'https://images.unsplash.com/photo-1614732414444-096040ec8c86?w=400&h=400&fit=crop',
    modelUrl: withBase('models/Planet3.glb'),
    modelScale: 0.2,
  },
  {
    name: 'Thorg',
    description: 'The thorg Planet, known for thorgin surface and thorgcaps.',
    color: '#CD5C5C',
    size: 3.8,
    order: 5,
    orbitSpeed: 0.08,
    rotationSpeed: 0.04,
    link: '/planets/thorg',
    image: 'https://images.unsplash.com/photo-1614732414444-096040ec8c86?w=400&h=400&fit=crop',
    modelUrl: withBase('models/Planet4.glb'),
    modelScale: 0.2,
  }
]

export const sunData = {
  name: 'About Me',
  description: 'This is a brief description about who I am and what I do. I am currently a Senior at Penn State Behrend studying Software Engineering.',
  color: '#ff6b35',
  size: 15,
  order: 0,
  orbitSpeed: 0,
  rotationSpeed: 0.001,
  link: '/About',
  image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=400&fit=crop',
  type: 'star'
}
