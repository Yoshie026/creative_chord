import React, { useState, useRef } from "react";
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime;


const SuperDiv = ({ children }) => {
   const random = x => {
     return Math.random() * x;
   };
   const animation = [
     {
       targets: ".atomic",
       color: "#d3d",
       easing: "easeInOutSine",
       delay: stagger(50)
     }
   ];
   const scatter = [
     {
       targets: ".atomic",
       translateX: () => {
         return random(10);
       },
       translateY: () => {
         return random(10);
       },
       scale: 1.2,
       rotate: () => {
         return random(60);
       },
       loop: 2,
       direction: "alternate",
       easing: "easeInOutSine",
       duration: 810
     }
   ];
 
   return (
     <Anime
       style={{ fontSize: "4em", color: "#d3d3d3" }}
       explode="characters"
       explodeOptions={{ name: "atomic" }}
       id="self"
       _onUpdate={animation}
       _onClick={scatter}
     >
       {children}
     </Anime>
   );
 };

//  const Circle = () => {
// return (
//    <>
//  <Anime
//       initial={[
//         {
//           targets: "#circle",
//           translateX: [
//             { value: 250, duration: 1000, delay: 500 },
//             { value: 0, duration: 1000, delay: 500 }
//           ],
//           translateY: [
//             { value: 0, duration: 500 },
//             { value: 80, duration: 500, delay: 1000 },
//             { value: 40, duration: 500, delay: 1000 }
//           ],
//           scaleX: [
//             { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
//             { value: 1, duration: 900 },
//             { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
//             { value: 1, duration: 900 }
//           ],
//           scaleY: [
//             { value: [1.75, 1], duration: 500 },
//             { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
//             { value: 1, duration: 450 },
//             { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
//             { value: 1, duration: 450 }
//           ],
//           easing: "easeOutElastic(1, .8)",
//           loop: true
//         }
//       ]}
//     >
//       <div
//         id="circle"
//         style={{ height: 50, width: 50, background: "#d3d", borderRadius: "50%" }}
//       ></div>
//     </Anime>
//     </>
// )
//       }
function NumberList(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) =>
     <li key={number.toString()}>
       {number}
     </li>
   );
   return (
     <ul>{listItems}</ul>
   );
 }

const Content = ({ children }) => {
   return(
   <Anime 
   type="h1"
   explode="characters"
   explodeOptions={{ name: "atomic" }}
   id="self"
   key={children.id}
   _onClick={[
     {
       targets: ".atomic",
       fontSize: "+=22px",
       delay: stagger(100)
     }
   ]}
   _onContextMenu={[
     {
       targets: ".atomic",
       fontSize: "-=22px",
       delay: stagger(100)
     }
   ]}
 > 
 {children}
 </Anime>
   )
}


const Headline = () => {
   return (
<Content children = 'Creative Chords'/>
   )
}
export { Headline }


