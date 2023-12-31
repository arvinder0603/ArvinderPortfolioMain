import React from 'react'
import { motion } from "framer-motion"
import { styles } from '../styles'
import Computers  from "./canvas/Computers"
import ComputersCanvas from "./canvas/Computers"

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto' >

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] flex mx-auto gap-5 items-start`}>

        <div className='flex flex-col justify-center items-center mt-5'>


         <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient '/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff] '>Arvinder Singh</span></h1>
          <p>I develop AI , user <br className='sm:block hidden'/> interfaces and  web applications. </p>
        </div>
      </div>
      

      <ComputersCanvas/>

    </section>
  )
}

export default Hero