import { sunData } from '../../data/solarData'
import TextType from '../Text/TextType'

export const InfoComponent = ({ selectedObject = sunData }) => {
  return (
    <div className="absolute top-6 left-6 pointer-events-auto" style={{ width: '31.44vh', height: '80vh', zIndex: 20 }}>
      {/* SVG Background */}
      <svg
          className="glowing-border absolute inset-0"
          width="260" 
          height="620" 
          viewBox="0 0 260 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
          }}
          preserveAspectRatio="xMinYMin meet"
      >
        <path d="M20 70L70 20H190L240 70V90L220 110L240 130V160H210L190 140.5L90 140L50 180V260L90 300H190L210 280H240V310L220 330L240 350V550L200 590H60L20 550V350L60 310L20 270V170L60 130L20 90V70Z" fill="#3A6D4B" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3"/>
        <path d="M240 50L210 20H240V50Z" fill="#3A6D4B"/>
        <path d="M240 560L210 590M210 20L240 50V20H210Z" stroke="#69D88E" strokeWidth="3"/>
        <path d="M240 570L220 590" stroke="#69D88E" strokeWidth="3"/>
        <path d="M240 580L230 590" stroke="#69D88E" strokeWidth="3"/>
        <path d="M20 285V335" stroke="#69D88E" strokeWidth="3"/>
        <path d="M30 295V325" stroke="#69D88E" strokeWidth="3"/>
        <path d="M40 305V316" stroke="#69D88E" strokeWidth="3"/>
        <path d="M20 105V155" stroke="#69D88E" strokeWidth="3"/>
        <path d="M30 115V145" stroke="#69D88E" strokeWidth="3"/>
        <path d="M40 125V136" stroke="#69D88E" strokeWidth="3"/>
        {/* Planet name container */}
        <path d="M80.5 50L50 80.5L80 110H180L210 80.5L180 50H80.5Z" fill="#3A6D4B" stroke="#69D88E" strokeWidth="5"/>
        {/* Planet description container */}
        <path d="M50 360L80 330H180L210 360V540L190 560H70L50 540V360Z" fill="#3A6D4B" stroke="#69D88E" strokeWidth="5"/>
      </svg>

      {/* Content */}
      <div className="absolute" style={{ top: '5', left: '0', right: '0', zIndex: 3 }}>
        {/* Planet Image - Centered in top section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop: '18vh', 
          transform: 'translateX(3%)'
        }}>
          <img 
            src={selectedObject.image} 
            alt={selectedObject.name}
            style={{
              width: '10vh',
              height: '10vh',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '0.2vh solid #69D88E',
            }}
          />
        </div>

        {/* Name - Inside hexagonal container */}
        <div style={{ 
          position: 'absolute',
          top: '7vh',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          textAlign: 'center',
          color: '#A2FFC1', 
          fontFamily: 'Orbitron, monospace',
          fontSize: '1.8vh',
          fontWeight: 'bold'
        }}>
          <TextType 
            key={`name-${selectedObject.name}`}
            text={[selectedObject.name]}
            typingSpeed={7}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
          />
        </div>

        {/* Description - Inside bottom container */}
        <div style={{ 
          position: 'absolute',
          top: '53vh',
          left: '8vh',
          right: '8vh',
          color: '#ffffff', 
          fontFamily: 'Orbitron, monospace',
          fontSize: '1.3vh',
          lineHeight: '1.8',
          textAlign: 'left',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          <TextType 
            key={`desc-${selectedObject.name}`}
            text={[selectedObject.description]}
            typingSpeed={7}
            pauseDuration={15}
            showCursor={false}
            cursorCharacter="|"
          />
        </div>
      </div>
    </div>
  );
}