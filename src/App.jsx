import React, { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import Member from './components/Section/Member'
import { Nav, DarkMode } from './components/Top/Nav'
import {
  Canvas,
  useFrame,
  useThree,
  useLoader,
  extend,
} from "@react-three/fiber";

import {
  Scroll,
  ScrollControls,
  useScroll,
  Sky,
  Stars,
  Lathe,
  OrbitControls,
} from "@react-three/drei";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

function Joinus() {
  return (
    <mesh castShadow receiveShadow position={[0, 0, 50]} scale={[10, 50, 100]}>
      <boxBufferGeometry />
      <meshLambertMaterial wireframe color="white" />
    </mesh>
  );
}

function LatheScene() {
  const points = React.useMemo(() => {
    const points = [THREE.Vector2];
    for (let i = 0; i < 10; i++) {
      points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
    }

    return points;
  }, []);

  return (
    <Lathe args={[points]} rotation={[-0.2, 0.7, 1.5]} scale={[0.9, 6, 0.9]}>
      <meshStandardMaterial color="white" wireframe />
    </Lathe>
  );
}

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <section className="main">
      <header className="elements">
        <section className="date">{date}</section>

        <section>
          <hr />
        </section>

        <section>
          <Nav/>
        </section>
      </header>

      <main className="container">
        <section>
          <h1>
            CREATIVE <br /> CHORDS
          </h1>
        </section>
        <Canvas
          style={{
            display: "block",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#000",
          }}
        >
          <ScrollControls
            pages={1.1} // Each page takes 100% of the height of the canvas
            distance={1} // A factor that increases scroll bar travel (default: 1)
            damping={4} // Friction, higher is faster (default: 4)
            horizontal={false} // Can also scroll horizontally (default: false)
            infinite={false} // Can also scroll infinitely (default: false)
          >
            <Scroll>
              <ambientLight />
              <LatheScene />
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
              />
            </Scroll>
            <Scroll html className="wide">
              <h1 style={{ color: "white" }}>
                {" "}
                MISSION
                <br />
                MISSION
                <br />
                MISSION{" "}
              </h1>
              <h2 style={{ color: "white" }}>
                {" "}
                Innovate as a community to shape the world of web3.0 and beyond
              </h2>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </main>
      <main className="featured">
        <section>
          <h1>
            FEATURED <br /> CREATIVE
          </h1>

          <Carousel emulateTouch={true} infiniteLoop={true} showIndicators={false} showStatus={false} swipeable={true}>
          
          <div>
            <Member bkname="DPM" 
            imageSrc = './images/DPM.png'
            imageSrcAlt ='DPM'
            nameMain = 'DPM'
            introDescription = 'Bla bla'
             />
           </div> 

           <div>
            <Member bkname="YANA" 
            imageSrc = 'https://api.readyplayer.me/v1/avatars/628de9ff49453c2dc412d2a6.png?cacheControl=true&uat=2022-08-26T11:57:38.543Z'
            imageSrcAlt ='YPM'
            nameMain = 'YANA'
            introDescription = 'Bla bla'
             />
           </div> 


          </Carousel>
        </section>
      </main>
      <footer>
        <Canvas
          gl={{ alpha: true }}
          camera={{ position: [0, 0, 10] }}
          style={{
            backgroundColor: "black",
            display: "block",
            height: "50vh",
            width: "100vw",
          }}
        >
          <ambientLight />
          <Joinus />
          <OrbitControls />
          <gridHelper
            rotation={[0.7, 1.6, 0.9]}
            args={[60, 40, -40, "white"]}
          />
        </Canvas>
      </footer>
    </section>
  );
}

export default App;
