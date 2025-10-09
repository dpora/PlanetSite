export const PlanetNavigation = ({ currentIndex, totalItems, onNavigate, objectNames }) => {
  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
  }

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto" style={{ zIndex: 30 }}>
      <div className="bg-black bg-opacity-80 border border-cyan-400 rounded-lg p-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 
                     rounded-full flex items-center justify-center transition-all duration-200 
                     shadow-lg hover:shadow-cyan-400/50 border border-cyan-300"
            aria-label="Previous object"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Current Object Display */}
          <div className="text-center min-w-32">
            <div className="text-lg font-bold text-cyan-400 mb-1">
              {objectNames[currentIndex]}
            </div>
            <div className="text-xs text-gray-400">
              {currentIndex + 1} of {totalItems}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 
                     rounded-full flex items-center justify-center transition-all duration-200 
                     shadow-lg hover:shadow-cyan-400/50 border border-cyan-300"
            aria-label="Next object"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to ${objectNames[index]}`}
            />
          ))}
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">Navigate celestial objects</p>
        </div>
      </div>
    </div>
  )
}