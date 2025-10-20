import { sunData } from '../../data/solarData'
import TextType from '../Text/TextType'

export const InfoComponent = ({ selectedObject = sunData }) => {
  return (
    <div className="absolute top-15 left-15 pointer-events-auto" style={{ width: '31.44vh', height: '60vh', zIndex: 20 }}>
      {/* SVG Background */}
      <svg
          className="glowing-border absolute inset-0"
          width="262" 
          height="500" 
          viewBox="0 0 262 500"
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
        <path d="M115.517 2H220.408L247 25.878L247 475L224.84 494.537H178.55L168.701 486.722H84" stroke="#69D88E" strokeWidth="3"/>
        <path d="M98 23H30L24 28.2193V403.5" stroke="#69D88E" strokeWidth="3"/>
        <path d="M35.4333 471.918L26 462.794L25 28.779L30.4614 24H225.581L236.504 34.427V147.386L225.581 156.509L226.581 457.581L238 467.573L226.581 478H182.89L174.45 471.918H35.4333Z" fill="#3A6D4B" fillOpacity="0.5"/>
        <path d="M14 467V483.361L31.7106 498H167" stroke="#69D88E" strokeWidth="3"/>
        <path d="M25 454V462.867L36 473" stroke="#69D88E" strokeWidth="3"/>
        <path d="M215.697 20H223.134L237.017 32.6322V146.757L226.605 155.034L227.605 457.656L240 468.546L227.605 479H181" stroke="#69D88E" strokeWidth="3"/>
        <path d="M98 19H27.3679L12.943 31.607V342L2 333.306V87.2517" stroke="#69D88E" strokeWidth="3"/>
        <path d="M254 28V41.9766L260 46.2021V459" stroke="#69D88E" strokeWidth="3"/>
      </svg>

      {/* Content */}
      <div className="absolute" style={{ top: '5vh', left: '0', right: '0', zIndex: 3 }}>
        {/* Planet Image - Centered */}
        <div style={{ textAlign: 'center', marginBottom: '3vh', paddingLeft: '9vh' }}>
          <img 
            src={selectedObject.image} 
            alt={selectedObject.name}
            style={{
              width: '12vh',
              height: '12vh',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '0.2vh solid #69D88E'
            }}
          />
        </div>

        {/* Name */}
        <div style={{ 
          color: '#ffffff', 
          fontFamily: 'Orbitron, monospace',
          fontSize: '1.4vh',
          marginBottom: '2vh',
          textAlign: 'left',
          paddingLeft: '4vh',
          paddingRight: '4vh'
        }}>
          <div style={{ color: '#69D88E', marginBottom: '0.5vh' }}>NAME:</div>
          <div style={{ 
            paddingLeft: '1vh',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '100%'
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
        </div>

        {/* Description */}
        <div style={{ 
          color: '#ffffff', 
          fontFamily: 'Orbitron, monospace',
          fontSize: '1.4vh',
          textAlign: 'left',
          paddingLeft: '4vh',
          paddingRight: '4vh'
        }}>
          <div style={{ color: '#69D88E', marginBottom: '0.5vh' }}>DESCRIPTION:</div>
          <div style={{ 
            paddingLeft: '1vh', 
            lineHeight: '1.6',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            maxWidth: '90%'
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
    </div>
  );
}