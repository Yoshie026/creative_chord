import React from "react";
import { useSpring, animated } from "react-spring";

const SpringIn = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      mass: 4.7,
      tension: 170,
      friction: 120,
      precision: 0.3,
      velocity: 0
    }
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export default SpringIn;
