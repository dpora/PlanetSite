import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register the MotionPath plugin
gsap.registerPlugin(MotionPathPlugin);

export const AnimatedLightOrb = () => {
  const orbRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (!orbRef.current) return;

    // Create a timeline for the main border orb
    const tl = gsap.timeline({ repeat: -1 });

    // Main border orb - Following the new responsive border path
    tl.to(orbRef.current, {
      duration: 8,
      ease: "none",
      motionPath: {
        path: "M1.5 424V37L38.5 1.5H411.5H1202H1424H1569H1625L1710 91V747.5L1622.5 838.5H1495.5H1202H411.5H370L331 798.5H34L1.5 771.5V560L34 579.5V732.5",
        autoRotate: true,
      },
    }, 0);

    // Add glowing effect
    gsap.to(orbRef.current, {
      filter: "drop-shadow(0 0 20px #69D88E) drop-shadow(0 0 40px #69D88E)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="light-orbs"
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
        zIndex: 15
      }}
      preserveAspectRatio="none"
    >
      {/* Main Border Light Orb - Custom SVG Shape */}
      <g ref={orbRef} transform="scale(.5, -.5)">
        <path 
          d="M2.5 9.5C3.16667 5.5 16.5 -5.50001 45.5 9.5C16.5 25 3 13 2.5 9.5Z" 
          fill="#69D88E" 
          stroke="#69D88E" 
          strokeWidth="3"
          opacity="0.9"
          style={{
            filter: 'drop-shadow(0 0 10px #69D88E)',
          }}
        />
      </g>

      {/* Gradient definition */}
      <defs>
        <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#69D88E" stopOpacity="1" />
          <stop offset="70%" stopColor="#69D88E" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#69D88E" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};