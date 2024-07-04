import React from 'react';
import { useSpring, animated } from 'react-spring';

const WrongXIcon = () => {
    const { xLength } = useSpring({
        from: { xLength: 2 },
        to: { xLength: 32 },
        config: { duration: 500 },
        reset: true,
      });
    
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ width: 80, height: 80, color: "white" }}
          >
            {/* Animated "x" mark */}
            <g fill="none" stroke="white" strokeWidth="2">
              <animated.line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                style={{ opacity: xLength.interpolate((l) => l / 32) }}
              />
              <animated.line
                x1="6"
                y1="18"
                x2="18"
                y2="6"
                style={{ opacity: xLength.interpolate((l) => l / 32) }}
              />
            </g>
          </svg>
        </>
      );
}

export default WrongXIcon