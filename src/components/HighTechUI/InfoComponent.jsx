import { sunData } from '../../data/solarData'

export const InfoComponent = ({ selectedObject = sunData }) => {
  return (
    <div className="absolute top-0 left-0 w-[400px] h-[800px] pointer-events-auto" style={{ zIndex: 20 }}>
      {/* SVG Background */}
      <svg
          className="glowing-border absolute inset-0"
          viewBox="0 0 400 800"
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
          {/* Hidden paths for GSAP motion paths */}
          <defs>
            <path id="infoPanelPath" d="M158 76.75H79.8919L73 82.75V614.75L61 716.75V735.75L81.4887 752.75H238" />
            <path id="infoVerticalPath" d="M338 82.75V104.25L345 110.75V745.75" />
          </defs>
          <path d="M84.8571 737.755L74 727.263V83.2459L80.2857 77.75H304.857L317.429 89.741V219.644L304.857 230.136V721.268L318 732.759L304.857 744.75H254.571L244.857 737.755H84.8571Z" fill="#3A6D4B" fillOpacity="0.5" />
          <path d="M158 76.75H79.8919L73 82.75V614.75" stroke="#69D88E" strokeWidth="3" />
          <path d="M177.544 51.75H299.166L330 79.2308V746.266L304.305 768.75H250.631L239.211 759.756H141" stroke="#69D88E" strokeWidth="3" />
          <path d="M61 716.75V735.75L81.4887 752.75H238" stroke="#69D88E" strokeWidth="3" />
          <path d="M73 716.75V727.017L86 738.75" stroke="#69D88E" strokeWidth="3" />
          <path d="M293.143 73.75H301.714L317.714 88.2608V219.358L305.714 228.865V721.232L320 733.741L305.714 745.75H252" stroke="#69D88E" strokeWidth="3" />
          <path d="M158 71.75H77.0674L60.5389 86.2695V443.75L48 433.737V150.356" stroke="#69D88E" strokeWidth="3" />
          <path d="M338 82.75V104.25L345 110.75V745.75" stroke="#69D88E" strokeWidth="3" />
      </svg>

      {/* Content overlay */}
      <div className="absolute inset-0 p-6 overflow-y-auto z-10 pointer-events-auto" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">
            {selectedObject.type === 'star' ? 'Solar System Center' : 'Planetary Information'}
          </h2>
          <p className="text-sm text-gray-300">Detailed Object Data</p>
        </div>

        {/* Selected Object Display */}
        <div className="bg-black bg-opacity-60 border border-cyan-400 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-4">
            {/* Object Image */}
            <div className="flex-shrink-0">
              <img 
                src={selectedObject.image} 
                alt={selectedObject.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-cyan-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-16 h-16 rounded-full border-2 border-cyan-300 flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: selectedObject.color, display: 'none' }}
              >
                {selectedObject.order}
              </div>
            </div>

            {/* Object Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{selectedObject.name}</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">{selectedObject.description}</p>
            </div>
          </div>
          
          {/* Technical Specifications */}
          <div className="border-t border-cyan-400 pt-4">
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">Technical Specifications</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-900 bg-opacity-50 p-3 rounded border border-gray-600">
                <span className="text-cyan-300 font-medium">Type:</span>
                <div className="text-gray-300">{selectedObject.type === 'star' ? 'Star' : 'Planet'}</div>
              </div>
              <div className="bg-gray-900 bg-opacity-50 p-3 rounded border border-gray-600">
                <span className="text-cyan-300 font-medium">Order:</span>
                <div className="text-gray-300">{selectedObject.order === 0 ? 'Center' : selectedObject.order}</div>
              </div>
              <div className="bg-gray-900 bg-opacity-50 p-3 rounded border border-gray-600">
                <span className="text-cyan-300 font-medium">Size:</span>
                <div className="text-gray-300">{selectedObject.size.toFixed(1)} units</div>
              </div>
              <div className="bg-gray-900 bg-opacity-50 p-3 rounded border border-gray-600">
                <span className="text-cyan-300 font-medium">Color:</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded border border-gray-400"
                    style={{ backgroundColor: selectedObject.color }}
                  ></div>
                  <span className="text-gray-300">{selectedObject.color}</span>
                </div>
              </div>
              {selectedObject.type !== 'star' && (
                <>
                  <div className="bg-gray-900 bg-opacity-50 p-3 rounded border border-gray-600">
                    <span className="text-cyan-300 font-medium">Orbit Speed:</span>
                    <div className="text-gray-300">{selectedObject.orbitSpeed.toFixed(2)}</div>
                  </div>
                  <div className="bg-gray-900 bg-opacity-50 p-3 rounded border border-gray-600">
                    <span className="text-cyan-300 font-medium">Rotation:</span>
                    <div className="text-gray-300">{selectedObject.rotationSpeed.toFixed(3)}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">Click on objects in the solar system to view details</p>
        </div>
      </div>
    </div>
  );
}

// (sunData is imported from ../../data/solarData)