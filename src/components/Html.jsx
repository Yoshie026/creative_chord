import React from 'react'
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime;

// const Box = ({ children }) => {
//   return (
//     <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }}>
//       {children}
//     </div>
//   );
// };


function Html() {
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

export { Html }


