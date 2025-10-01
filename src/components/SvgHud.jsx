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

export const InfoComponent = () => {
  return (
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
    );
}

export const HighTechComponent = () => {
  return (
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
        <path d="M1601 53.5L1609.5 61H1560.5L1553.5 53.5H1601Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1400.5 26L1415 41H1356.5L1340 26H1400.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1319.5 26L1334 41H1275.5L1259 26H1319.5Z" fill="#69D88E" fillOpacity="0.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1610 42H1437L1415.5 20H1252.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1546.5 53.5H1283.5" stroke="#69D88E" strokeWidth="3" />
    </svg>
    );
}

export const CallComponent = () => {
  return (
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
        <path d="M1657 288.233V100.313L1637.62 82L1428.48 82L1415 95.9525V210.189L1428.48 226.757H1502.62V249.43H1440.27V381.5" stroke="#69D88E" strokeWidth="3" />
        <path d="M1517.5 228.468V264.5H1455V383L1477.83 414.778H1642.02L1668 383L1668 357.608V101" stroke="#69D88E" strokeWidth="3" />
    </svg>
    );
}