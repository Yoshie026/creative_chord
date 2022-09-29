import * as THREE from 'three';
import React, { useMemo, useRef, useLayoutEffect,useEffect,getWebsites,loadUserRatings } from 'react'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import { Canvas, useThree ,useLoader } from "@reactthree/fiber";
import {useFrame,Canvas, useThree, useLoader, extend } from "@react-three/fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import avantgarde from './components/assets/fonts/AvantGarde Bk BT_Book.json';
import { MeshPhysicalMaterial, MeshStandardMaterial } from 'three';

// const font = useLoader(FontLoader, './NeueHaasGroteskDisp Pro_Bold.json');
// extend({FontLoader}); /* Because canvas clobbers the extend above */

// export default function Text({ children }){
   // const font = new FontLoader().parse(avantgarde);
//      const mesh = useRef()
//   useLayoutEffect(() => {
//     const size = new THREE.Vector3()
//     mesh.current.geometry.computeBoundingBox()
//     mesh.current.geometry.boundingBox.getSize(size)
//   }, [children])
   // return(
   //    //  <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
   //    <mesh>
   //       <textGeometry args={[children,{font,size:1,height:1}]}/>
   //       <meshPhysicalMaterial attach='material' color={'white'}/>
   //       </mesh>
   // )
// }

export default function Text({text, coordinates}){
const CameraController = () => {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
         controls.minDistance = 3;
         controls.maxDistance = 20;
         return () => {
            controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
};
// function Text3d(){
   const font = new FontLoader().parse(avantgarde);
   extend({ TextGeometry,FontLoader,OrbitControls });
   const textOptions = {
      font,
      size: 0.75,
      height: 1
   };
   return (
      <mesh position={coordinates}>
         <textGeometry attach='geometry' args={[text, textOptions]} />
         <meshStandardMaterial attach='material' color="black" />
       </mesh>
    )
    
}
// Text3d();
// };
// }
// export default function App(){
//    return (
//       <Canvas>
//          <CameraController/>
//          <ambientLight />
//          <Text3d/>
//       </Canvas>
//    );
// };





// export default function Text({ children, size = 1.5, color = '#000000', ...props }) {
//   const config = useMemo(
//     () => ({ size: 40, height: 30, curveSegments: 32, bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 }),
//   )
//   const mesh = useRef()
//   useEffect(() => {
//   getWebsites();
//   loadUserRatings();
// }, [getWebsites, loadUserRatings]);
//   useLayoutEffect(() => {
//     const size = new THREE.Vector3()
//     mesh.current.geometry.computeBoundingBox()
//     mesh.current.geometry.boundingBox.getSize(size)
//   }, [children])
//   return (
//     <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
//       <Text3D ref={mesh} font={boldUrl} {...config}>
//       {/* <Text3D ref={mesh} {...config}> */}
//         {children}
//         <meshNormalMaterial />
//       </Text3D>
//     </group>
//   )
// }
