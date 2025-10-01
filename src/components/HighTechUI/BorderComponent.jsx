export const BorderComponent = () => {
  return (
    <>
      {/* Left side - anchored to left, fixed size */}
      <svg
          className="glowing-border left-side"
          viewBox="0 0 412 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '412px',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 10
          }}
          preserveAspectRatio="none"
      >

        <path d="M1.5 424V37L38.5 1.5H411.5M34 732.5C34 672.75 34 579.5 34 579.5L1.5 560V771.5L34 798.5H331L370 838.5H411.5" stroke="#69D88E" strokeWidth="3"/>
        <path d="M3.5 790L24 811.5V837.5" stroke="#69D88E" strokeWidth="3"/>
        <path d="M362 50L333 19.5H42.5L17.5 44.5V373" stroke="#69D88E" strokeWidth="3"/>
        <path d="M345 838.5L320.5 811.5H34V838.5H345Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3"/>
      </svg>

      {/* Middle section - responsive width */}
      <svg
          className="glowing-border middle-section"
          viewBox="411.5 0 790.5 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
          position: 'absolute',
          top: 0,
          left: '412px',
          right: '420px',
          width: 'calc(100% - 832px)',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 10
          }}
          preserveAspectRatio="none"
      >
          <path d="M1202 838.5H411.5" stroke="#69D88E" strokeWidth="3"/>
          <path d="M1202 1.5H411.5" stroke="#69D88E" strokeWidth="3"/>
      </svg>

      {/* Right side - anchored to right, fixed size */}
      <svg
          className="glowing-border right-side"
          viewBox="1293 0 420 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '420px',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 10
          }}
          preserveAspectRatio="none"
      >
          <path d="M1654 838.5L1710 783V838.5H1654Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
          <path d="M1293 1.5H1424H1569H1625L1710 91V747.5L1622.5 838.5H1495.5H1293" stroke="#69D88E" strokeWidth="3"/>
          <path d="M1695 127V742L1612.5 826.5H1313.5" stroke="#69D88E" strokeWidth="3" />
          <path d="M1709.5 767L1636 840.5" stroke="#69D88E" strokeWidth="3" />
      </svg>
    </>
    );
}