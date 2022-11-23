// Navigation bar for Top page
import React, { useRef, useState } from "react";
import * as THREE from 'three'

import { Scroll, ScrollControls, Environment } from '@react-three/drei'
import { Turn as Hamburger } from 'hamburger-react'

const Nav = () => {
   const [isOpen, setOpen] = useState(false)

   return (
      <Hamburger className='hamburger'
         style={{
            marginRight: '0%'
         }}
         size={40}
         distance="sm"
         toggled={isOpen} toggle={setOpen}
      // onToggle={toggled => setOpen(!isOpen)}
      />
   )
};


const DarkMode = () => {
   // console.log('');

};

export { Nav, DarkMode }