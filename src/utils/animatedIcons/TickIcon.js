import React from "react";
import { useSpring, animated } from "react-spring";

const TickIcon = () => {
  const { length } = useSpring({
    from: { length: 2 },
    to: { length: 32 },
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
        <g fill="none" stroke="white" strokeWidth="2">
          <animated.polyline
            points="2 12 10 18 22 6"
            strokeDasharray={length.interpolate((l) => `${l} 100`)}
          />
        </g>
      </svg>
    </>
  );
};

export default TickIcon;
