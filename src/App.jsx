import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, Text3D, Sky, Stars,Environment } from "@react-three/drei";
import {config, useSpring, animated} from "@react-spring/three";
import './App.css';
// import Text from './components/Text'


function Box(props) {
  const { width, height } = useThree((state) => state.viewport);
  const ref = useRef();
  useFrame(()=>(ref.current.rotation.x += 0.075))

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
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.4} />
    </animated.mesh>
  );
}

// function Jumbo() {
//   const ref = useRef()
//   useFrame(({ clock }) => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z = Math.sin(clock.getElapsedTime()) * 0.3))
//   return (
//     <group ref={ref}>
//       <Text hAlign="right" position={[-12, 6.5, 0]} children="THREE" />
//       <Text hAlign="right" position={[-12, 0, 0]} children="TRES" />
//       <Text hAlign="right" position={[-12, -6.5, 0]} children="TROIS" />
//     </group>
//   )
// }


function App() {
  return (
    <Canvas>
      <ScrollControls horizontal={true} damping={3} pages={3}>
        <Scroll><Box position={[1.3,0,0]}/></Scroll>
      </ScrollControls>
      <Sky distance={450000} // Camera distance (default=450000)
  sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
  inclination={0} // Sun elevation angle from 0 to 1 (default=0)
  azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
  />

  <Stars
  radius={100} // Radius of the inner sphere (default=100)
  depth={50} // Depth of area where stars should fit (default=50)
  count={5000} // Amount of stars (default=5000)
  factor={4} // Size factor (default=4)
  saturation={0} // Saturation 0-1 (default=0)
  fade // Faded dots (default=false)
/>
      <Environment preset="forest" /> 
      {/* sunset: 'venice/venice_sunset_1k.hdr',
  dawn: 'kiara/kiara_1_dawn_1k.hdr',
  night: 'dikhololo/dikhololo_night_1k.hdr',
  warehouse: 'empty-wharehouse/empty_warehouse_01_1k.hdr',
  forest: 'forrest-slope/forest_slope_1k.hdr',
  apartment: 'lebombo/lebombo_1k.hdr',
  studio: 'studio-small-3/studio_small_03_1k.hdr',
  city: 'potsdamer-platz/potsdamer_platz_1k.hdr',
  park: 'rooitou/rooitou_park_1k.hdr',
  lobby: 'st-fagans/st_fagans_interior_1k.hdr', */}

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
