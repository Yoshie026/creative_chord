import React, { useState, useRef, useEffect } from "react";
import ReactAnime from 'react-animejs'
// import anime from "animejs/lib/anime.es";
// import animejs, { AnimeInstance } from "react-animejs";

const {Anime, stagger} = ReactAnime;


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



const Player = ({ children }) => {
   // const animeRef = useRef<AnimeInstance>();
   // useEffect(() => {
   //    setTimeout(() => {
   //      if (animeRef.current) {
   //        animeRef.current.pause();
   //        // or
   //        animeRef.current.reset();
   //      }
   //    }, 1000);
   //  }, []);

   const [playing, setPlaying] = useState(false);
   const handleClick = () => {
      setPlaying(!playing);
    };

    const random = x => {
      return Math.random() * x;
    };
    const animation = [
      {
        targets: ".atomic",
        easing: "easeInOutSine",     
        fontSize: "+=22px",
        delay: stagger(80)
      }
    ];

   //  const scatter = [
   //    {
   //      targets: ".atomic",
   //    //   translateX: () => {
   //    //     return random(10);
   //    //   },
   //    //   translateY: () => {
   //    //     return random(-10);
   //    //   },
   //      scale: 2.0,
   //      fontSize: () => {
   //        return random(100);
   //      },
   //    //   fontSize: "+=22px",
   //      direction: "alternate",
   //      easing: "easeInOutSine",
   //      duration: 750
   //    }
   //  ];
    
    var easingNames = [
      'easeInQuad',
      'easeInCubic',
      'easeInQuart',
      'easeInQuint',
      'easeInSine',
      'easeInExpo',
      'easeInCirc',
      'easeInBack',
      'easeOutQuad',
      'easeOutCubic',
      'easeOutQuart',
      'easeOutQuint',
      'easeOutSine',
      'easeOutExpo',
      'easeOutCirc',
      'easeOutBack',
      'easeInBounce',
      'easeInOutQuad',
      'easeInOutCubic',
      'easeInOutQuart',
      'easeInOutQuint',
      'easeInOutSine',
      'easeInOutExpo',
      'easeInOutCirc',
      'easeInOutBack',
      'easeInOutBounce',
      'easeOutBounce',
      'easeOutInQuad',
      'easeOutInCubic',
      'easeOutInQuart',
      'easeOutInQuint',
      'easeOutInSine',
      'easeOutInExpo',
      'easeOutInCirc',
      'easeOutInBack',
      'easeOutInBounce',
    ]

   //  const colors = ['#ff0000', '#ff4000']; 
   //  for(let i=0;i<colors.length;i++){
      // var color = colors[i]
    const animation1 = [
      {
         targets: ".atomic",
         // color: colors[i],
         translateX: [20,20],
         opacity: [0.0, 1.0], 
         fontSize:"+=10px",
         // color:['#000','#000'],
      //   delay: stagger(200),
      //   translateX: stagger(100),
            //  direction: "reverse",
        delay: stagger(100),
        easing: 'steps(2)'
      }
    ];
   


   return(
      // <SuperDiv children="Creative Chords" />
   <Anime 
   type="h3"
   explode="characters"
   // color=[#ef3550','#f48fb1']

   explodeOptions={{ name: "atomic" }}
   id="self"
   // _onEntering={{ animation1 }}
   _onUpdate={animation1}
   _onClick={[
     {
       targets: ".atomic",
       fontSize: "+=22px",
       delay: stagger(100)
     }
   ]}
   // onEntering={{ translateX: [300, 0], opacity: [0., 1], easing: "linear" }}
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
<Player children = 'Creative Chords'/>
   )
}
export { Headline }


