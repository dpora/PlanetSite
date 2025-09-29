import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { SpaceScene } from '../components/SpaceScene'

const BorderSVG = () => (
  <svg 
    className="glowing-border"
    viewBox="0 0 1713 847" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 10
    }}
    preserveAspectRatio="none"
  >
    <path d="M1400.5 26L1415 41H1356.5L1340 26H1400.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1319.5 26L1334 41H1275.5L1259 26H1319.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1655.5 845L1711.5 789.5V845H1655.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1.5 424V37L38.5 1.5H1424H1569H1625L1710 91V747.5L1622.5 838.5H1495.5H370L331 798.5H34L1.5 771.5V560L34 579.5V732.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1695 127V742L1612.5 826.5H1230.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M580.5 50L551.5 19.5H42.5L17.5 44.5V373" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M3.5 790L24 811.5V837.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M345 838.5L320.5 811.5H34V838.5H345Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1710.5 767.5L1637 841" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1610 42H1437L1415.5 20H1252.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1546.5 53.5H1283.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1601 53.5L1609.5 61H1560.5L1553.5 53.5H1601Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1657 288.233V100.313L1637.62 82L1428.48 82L1415 95.9525V210.189L1428.48 226.757H1502.62V249.43H1440.27V381.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M1517.5 228.468V264.5H1455V383L1477.83 414.778H1642.02L1668 383L1668 357.608V101" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M84.8571 737.755L74 727.263V83.2459L80.2857 77.75H304.857L317.429 89.741V219.644L304.857 230.136V721.268L318 732.759L304.857 744.75H254.571L244.857 737.755H84.8571Z" fill="#323232" stroke="#323232" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M158 76.75H79.8919L73 82.75V614.75" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M177.544 51.75H299.166L330 79.2308V746.266L304.305 768.75H250.631L239.211 759.756H141" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M61 716.75V735.75L81.4887 752.75H238" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M73 716.75V727.017L86 738.75" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M293.143 73.75H301.714L317.714 88.2608V219.358L305.714 228.865V721.232L320 733.741L305.714 745.75H252" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M158 71.75H77.0674L60.5389 86.2695V443.75L48 433.737V150.356" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
    <path d="M338 82.75V104.25L345 110.75V745.75" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
  </svg>
)

export const Home = () => (
  <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <Canvas camera={{ position: [0, 50, 150], far: 200000 }}>
      <color attach='background' args={['black']} />
      <ambientLight intensity={0.25} />

      <OrbitControls maxDistance={450} minDistance={50} makeDefault />
      
      <SpaceScene />

      <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </Canvas>
    
    <BorderSVG />
  </div>
);