import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

export const PlanetNavigation = ({ currentIndex, totalItems, onNavigate, objectLinks, objectsExternal }) => {
  const navigate = useNavigate()
  const isNavigatingRef = useRef(false)
  
  const handlePrevious = () => {
    if (isNavigatingRef.current) return // Prevent multiple clicks
    isNavigatingRef.current = true
    
    const newIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1
    onNavigate(newIndex)
    
    // Reset after a short delay
    setTimeout(() => {
      isNavigatingRef.current = false
    }, 300)
  }

  const handleNext = () => {
    if (isNavigatingRef.current) return // Prevent multiple clicks
    isNavigatingRef.current = true
    
    const newIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
    
    // Reset after a short delay
    setTimeout(() => {
      isNavigatingRef.current = false
    }, 300)
  }
  
  console.log("Current Index:", currentIndex);
  const handleExplore = () => {
    // Navigate to the link for the current object
    const link = objectLinks[currentIndex]
    const isExternal = objectsExternal && objectsExternal[currentIndex]
    
    if (link) {
      if (isExternal) {
        // Open external links in a new tab
        window.open(link, '_blank', 'noopener,noreferrer')
      } else {
        // Use React Router for internal links
        navigate(link)
      }
    }
  }

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto" style={{ zIndex: 30 }}>
      <svg width="560" height="200" viewBox="0 0 560 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="glowing-border sdrop-shadow-2xl">
        {/* Main container background */}
        <path d="M100 70L50 110V150L100 190H460L510 150V110L460 70L380 70L330 30H230L180 70H100Z" fill="#3A6D4B"/>
        <path d="M510 90L485 70L510 70V90Z" fill="#3A6D4B"/>
        <path d="M100 70L50 110V150L100 190H460L510 150V110L460 70L380 70L330 30H230L180 70H100Z" stroke="#69D88E" strokeWidth="3"/>
        <path d="M510 90L485 70L510 70V90Z" stroke="#69D88E" strokeWidth="3"/>
        <path d="M50 100L87.5 70M50 90L75 70" stroke="#69D88E" strokeWidth="3"/>
        <path d="M50 80L62.5 70" stroke="#69D88E" strokeWidth="3"/>
        
        {/* Explore button */}
        <g filter="url(#filter0_d_88_25)" onClick={handleExplore} style={{ cursor: 'pointer' }} className="transition-all hover:opacity-80 active:scale-99">
          <path d="M205 90L245 60H315L355 90L315 120.059L245 120L205 90Z" fill="#69D88E" fillOpacity="0.5" shapeRendering="crispEdges"/>
          <path d="M205 90L245 60H315L355 90L315 120.059L245 120L205 90Z" stroke="#69D88E" strokeWidth="5" shapeRendering="crispEdges"/>
          {/* Explore button text */}
          <text x="280" y="95" textAnchor="middle" fill="#A2FFC1" fontSize="18" fontWeight="bold" style={
            { pointerEvents: 'none',
              fontFamily: 'Orbitron, monospace',
            }}>
            VISIT
          </text>
        </g>
        
        {/* Right button */}
        <g filter="url(#filter1_d_88_25)" onClick={handleNext} style={{ cursor: 'pointer' }} className="transition-all hover:opacity-80 active:scale-99">
          <path d="M330 130L370 100H440L480 130L440 160.059L370 160L330 130Z" fill="#69D88E" fillOpacity="0.5" shapeRendering="crispEdges"/>
          <path d="M330 130L370 100H440L480 130L440 160.059L370 160L330 130Z" stroke="#69D88E" strokeWidth="5" shapeRendering="crispEdges"/>
          {/* Right button Arrow */}
          <path d="M410.5 110L435.5 130L410.5 150M393 120L405.5 130L393 140" stroke="#A2FFC1" strokeWidth="5" style={{ pointerEvents: 'none' }}/>
        </g>
        
        {/* Position info container */}
        <path d="M195 177L240.333 143H319.667L365 177H195Z" fill="#182D1F" stroke="#69D88E" strokeWidth="5"/>
        
        {/* Indicator dots */}
        <g>
          {Array.from({ length: totalItems }).map((_, index) => {
            const spacing = 12
            const totalWidth = (totalItems - 1) * spacing
            const startX = 280 - totalWidth / 2
            const x = startX + index * spacing
            const y = 160
            
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r={index === currentIndex ? 4 : 3}
                fill={index === currentIndex ? '#69D88E' : '#3A6D4B'}
                stroke={index === currentIndex ? '#A2FFC1' : '#69D88E'}
                strokeWidth={index === currentIndex ? 2 : 1}
                onClick={() => onNavigate(index)}
                style={{ cursor: 'pointer' }}
                className={`transition-all duration-10 ${index === currentIndex ? 'drop-shadow-lg' : 'hover:fill-[#69D88E]'}`}
              />
            )
          })}
        </g>
        
        {/* Left button */}
        <g filter="url(#filter2_d_88_25)" onClick={handlePrevious} style={{ cursor: 'pointer' }} className="transition-all hover:opacity-80 active:scale-99">
          <path d="M80 130L120 100H190L230 130L190 160.059L120 160L80 130Z" fill="#69D88E" fillOpacity="0.5" shapeRendering="crispEdges"/>
          <path d="M80 130L120 100H190L230 130L190 160.059L120 160L80 130Z" stroke="#69D88E" strokeWidth="5" shapeRendering="crispEdges"/>
          {/* Left button Arrow */}
          <path d="M150 111L125 131L150 151M167.5 121L155 131L167.5 141" stroke="#A2FFC1" strokeWidth="5" style={{ pointerEvents: 'none' }}/>
        </g>
        
        {/* Filter definitions */}
        <defs>
          <filter id="filter0_d_88_25" x="196.833" y="57.5" width="166.331" height="73.0598" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_25"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_25" result="shape"/>
          </filter>
          <filter id="filter1_d_88_25" x="321.833" y="97.5" width="166.331" height="73.0598" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_25"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_25" result="shape"/>
          </filter>
          <filter id="filter2_d_88_25" x="71.8333" y="97.5" width="166.331" height="73.0598" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_25"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_25" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
  )
}