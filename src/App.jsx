import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, Text3D } from "@react-three/drei";
import {config, useSpring, animated} from "@react-spring/three";
import './App.css';

function Box(props) {
  const { width, height } = useThree((state) => state.viewport);
  const ref = useRef();
  useFrame(()=>(ref.current.rotation.x += 0.1))



const [isClicked, setClicked ] = useState(false);
const [isHovered, setHovered ] = useState(false);

const {scale} = useSpring({
  scale:isClicked ? 2 : 1,
  config: config.wobbly,
});

  // useFrame(() => {
  //   group.current.children[0].material.color = "pink";
  //   // group.current.children[1];
  // });
  return (
    <animated.mesh {...props} ref={ref} 
    onClick={()=> setClicked(!isClicked)}
    onPointerOver={()=> setHovered(true)}
    onPointerOut={()=> setHovered(false)}
     scale={scale}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={isHovered ? "hotpink" : "black"} />
      <ambientLight intensity={0.8} />
      <hemisphereLight intensity={0.4} />
    </animated.mesh>
  );
}
function App() {
  return (
    <Canvas>
      <ScrollControls horizontal={true} damping={3} pages={3}>
        <Scroll><Box position={[1.3,0,0]}/></Scroll>
      </ScrollControls>
    </Canvas>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Edit <code>src/App.js</code> and save to reload.</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
