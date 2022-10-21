import React from "react";
import { useSpring, animated } from "react-spring";

const SpringOut = ({ children }) => {
  const props = useSpring({
    opacity: 0,
    from: { opacity: 1 },
    config: { mass: 4.7, tension: 170, friction: 40, precision: .3, velocity: 0 }

    
  });
  return(
    <animated.div style={props}>{children}</animated.div>
  )
};

export default SpringOut;