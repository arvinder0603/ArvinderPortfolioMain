import { useState } from 'react'
import { BrowserRouter } from "react-router-dom"

import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"

import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Tech from "./components/Tech"
import Works from "./components/Works"




import './App.css'
import { StarsCanvas } from './components/canvas'

const App = () => {

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary '>
      <div className='bg-hero-pattern  bg-no-repeat bg-cover bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <div className='relative z-0'>

      <Works />

      <StarsCanvas/>         
         
      </div>
     
      
      <div className='relative z-0'>
        <Contact />

        <StarsCanvas/>        

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
