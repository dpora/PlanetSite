export const InfoComponent = () => {
  return (
    <svg
        className="glowing-border"
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '400px',
        height: '800px',
        pointerEvents: 'none',
        zIndex: 10
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
    );
}