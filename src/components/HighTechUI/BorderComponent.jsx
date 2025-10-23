export const BorderComponent = () => {
  return (
    <>
      {/* Left - top, middle, bottom so middle can stretch vertically */}
      <svg
          className="glowing-border left-top"
          viewBox="0 0 412 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '412px',
            height: '127px',
            pointerEvents: 'none',
            zIndex: 10
          }}
          preserveAspectRatio="none"
      >
        <path d="M1.5 127V37L39 1.5H412" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M17.5 127V44.5L42.5 19.5H333L362 50" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
      </svg>

      <svg
          className="glowing-border left-middle"
          viewBox="0 127 412 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: '127px',
            left: 0,
            width: '412px',
            height: 'calc(100vh - 329px)', /* 100vh - (127 + 202) */
            pointerEvents: 'none',
            zIndex: 10
          }}
          preserveAspectRatio="none"
      >
        <path d="M17.5 127V373" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M1.5 123V529.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
      </svg>

      <svg
          className="glowing-border left-bottom"
          viewBox="0 638 412 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '412px',
            height: '202px',
            pointerEvents: 'none',
            zIndex: 10
          }}
          preserveAspectRatio="none"
      >
        <path d="M-1 790L24 811.5V840" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M-1 770L34.5 798.5H352.25L391.25 838.5H412" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M371.5 838.5L347 811.5H33.9999V838.5H371.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M326 725L280.71 676H192" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M326 694L292.539 658H227" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
        <path d="M15 657.5H1.5V752.5L41.5 785H344L271 694.5H152.5L134.5 682H62H35.5L15 657.5Z" fill="#3A6D4B" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
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
          <path d="M1202 838.5H411.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
          <path d="M1202 1.5H411.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
      </svg>

      {/* Right - top, middle, bottom so middle can stretch vertically */}
      <svg
          className="glowing-border right-top"
          viewBox="1293 0 420 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '420px',
            height: '127px',
            pointerEvents: 'none',
            zIndex: 10
          }}
          preserveAspectRatio="none"
      >
          <path d="M1293 1.5H1424H1569H1625L1710 91V747.5L1622.5 838.5H1495.5H1293" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
      </svg>

      <svg
          className="glowing-border right-middle"
          viewBox="1293 127 420 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            top: '127px',
            right: 0,
            width: '420px',
            height: 'calc(100vh - 329px)', /* 100vh - (127 + 202) */
            pointerEvents: 'none',
            zIndex: 10
          }}
          preserveAspectRatio="none"
      >
          <path d="M1695 127V742L1612.5 826.5H1313.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
          <path d="M1293 1.5H1424H1569H1625L1710 91V747.5L1622.5 838.5H1495.5H1293" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
      </svg>

      <svg
          className="glowing-border right-bottom"
          viewBox="1293 638 420 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '420px',
            height: '202px',

            pointerEvents: 'none',
            zIndex: 10
          }}
          preserveAspectRatio="none"
      >
          <path d="M1709.5 767L1636 840.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
          <path d="M1208.000061 838.5H1497.744L1623.62 839L1709.5 747.891V638" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
          <path d="M1654 838.5L1710 783V838.5H1654Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
          <path d="M1230.5 826.5H1612.5L1695 742V638" stroke="#69D88E" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
      </svg>
    </>
    );
}