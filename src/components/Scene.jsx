import React, { useRef, useState} from "react";
import * as THREE from 'three'

import { Scroll, ScrollControls,Environment } from '@react-three/drei'
import { Main,DrawLines } from './Main'
import { Headline,SuperDiv } from './Headline'

import {config, useSpring, animated} from "@react-spring/three";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useThree, useLoader, extend } from "@react-three/fiber";


function Scene() {
   useFrame(({ mouse, camera }) => {
     camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
     camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
     camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
     camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
   })
 




   return (

     <ScrollControls pages={3}>
       
       <Scroll html>
       {/* <Html /> */}
       <Headline />
 
         {/* <Particles /> */}
         {/* <Objects /> */}
       </Scroll>
       {/* <Scroll>
       </Scroll> */}
     </ScrollControls>
   )
 }
 
 export { Scene }