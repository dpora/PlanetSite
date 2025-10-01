import { useState, useEffect } from 'react';

export const HighTechComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // 7-segment display patterns for digits 0-9
  const segmentPatterns = {
    '0': [1,1,1,1,1,1,0],
    '1': [0,1,1,0,0,0,0],
    '2': [1,1,0,1,1,0,1],
    '3': [1,1,1,1,0,0,1],
    '4': [0,1,1,0,0,1,1],
    '5': [1,0,1,1,0,1,1],
    '6': [1,0,1,1,1,1,1],
    '7': [1,1,1,0,0,0,0],
    '8': [1,1,1,1,1,1,1],
    '9': [1,1,1,1,0,1,1],
    ':': [0,0,0,0,0,0,0] // colon placeholder
  };

  const renderSegment = (x, y, segmentIndex, isOn) => {
    const segments = [
      // top
      { x: x+2, y: y, width: 8, height: 2 },
      // top-right
      { x: x+10, y: y+2, width: 2, height: 6 },
      // bottom-right
      { x: x+10, y: y+10, width: 2, height: 6 },
      // bottom
      { x: x+2, y: y+16, width: 8, height: 2 },
      // bottom-left
      { x: x, y: y+10, width: 2, height: 6 },
      // top-left
      { x: x, y: y+2, width: 2, height: 6 },
      // middle
      { x: x+2, y: y+8, width: 8, height: 2 }
    ];

    const segment = segments[segmentIndex];
    return (
      <rect
        key={segmentIndex}
        x={segment.x}
        y={segment.y}
        width={segment.width}
        height={segment.height}
        fill={isOn ? "#69D88E" : "#1a3d24"}
        opacity={isOn ? 1 : 0.2}
      />
    );
  };

  const renderDigit = (digit, x, y) => {
    const pattern = segmentPatterns[digit] || [0,0,0,0,0,0,0];
    return (
      <g key={`${x}-${y}`}>
        {pattern.map((isOn, index) => renderSegment(x, y, index, isOn))}
      </g>
    );
  };

  const renderColon = (x, y) => {
    return (
      <g key={`colon-${x}`}>
        <circle cx={x+2} cy={y+5} r="1" fill="#69D88E" />
        <circle cx={x+2} cy={y+11} r="1" fill="#69D88E" />
      </g>
    );
  };

  const timeString = formatTime(currentTime);
  const digits = timeString.split('');

  return (
    <svg
        className="glowing-border"
        viewBox="1250 0 463 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '463px',
        height: '100px',
        pointerEvents: 'none',
        zIndex: 10
        }}
        preserveAspectRatio="xMaxYMin meet"
    >
        <path d="M1601 53.5L1609.5 61H1560.5L1553.5 53.5H1601Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1400.5 26L1415 41H1356.5L1340 26H1400.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1319.5 26L1334 41H1275.5L1259 26H1319.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1610 42H1437L1415.5 20H1252.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1546.5 53.5H1283.5" stroke="#69D88E" strokeWidth="3" />
        
        {/* 7-Segment Digital Clock Display */}
        <defs>
          <filter id="alienGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <g filter="url(#alienGlow)" transform="translate(1470, 17)">
          {digits.map((digit, index) => {
            const x = index * 14;
            if (digit === ':') {
              return renderColon(x, 0);
            }
            return renderDigit(digit, x, 0);
          })}
        </g>
    </svg>
    );
}