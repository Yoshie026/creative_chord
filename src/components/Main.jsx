import React, { useState, useRef, useEffect } from "react";
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime;
import { Canvas, useFrame, useThree, useLoader, extend } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, Sky, Stars,Environment } from "@react-three/drei";
import {config, useSpring, animated} from "@react-spring/three";
// const Box = ({ children }) => {
//   return (
//     <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }}>
//       {children}
//     </div>
//   );
// };


function DrawLines(props){
  const { width, height } = useThree((state) => state.viewport);
  const ref = useRef();

  useFrame(()=>(ref.current.position.x += 0.075))
  
  const points = []
  points.push(new Vector3(-width, 10, 0))
  points.push(new Vector3(width, 10, 0))
  // points.push(new Vector3(10, 0, 0))

  const lineGeometry = new BufferGeometry().setFromPoints(points)
  
  // const positions = new Float32Array(points.length * 2)
  return (
      <group  {...props} ref={ref} position={[0, -2.5, -10]}>
        <line geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color={'#000'} linewidth={15} linecap={'round'} linejoin={'round'} />
        </line>
      </group>
  )
}

function Main() {
  return (
    <div className='header'>
      <h1
        style={{
          position: 'absolute',
          top: '1vh',
          left: '7vw',
          transform: 'translateX(-50%)',
          color: '#000000',
        }}>
        Creative Chords
      </h1>
      </div>
      /*{ <h1
        style={{
          position: 'absolute',
          top: '140vh',
          left: '50vw',
          transform: 'translateX(-65%)',
          color: '#f4b677'
        }}>
        Your Future
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '250vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: '#673ab7'
        }}>
        Awaits
      </h1> }*/
  )
}

export { Main, DrawLines }


