import React from 'react'
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants/index"
import { fadeIn, textVariant } from "../utils/motion"
import StarWrapper from "../hoc/SectionWrpper"

const ServiceCard = ({index,title,icon}) =>{
  return(
   <div>
    <Tilt className="xs:w-[250px] w-full">{title}
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

      <div 
      option={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >

        <img  className='w-16 h-16 object-contain' src={icon} alt={title}/>

          <h1 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h1>
      </div>

      </motion.div>
    </Tilt>

   </div>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <div className='text-center mt-5'>
      <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>


      </div>
      
      </motion.div>
      <div className='flex justify-center'>  
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4  text-secondary text-[17px] max-w-3xl leading-8 flex justify-center text-center'>

        Highly skilled Full Stack Developer with a strong background in
        Machine Learning and Natural Language Processing (NLP).
        Adept at designing and implementing end-to-end solutions,
        combining front-end and back-end development expertise to
        create seamless user experiences.
        
       

      </motion.p>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>  
        {
          services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  )
}

export default  StarWrapper(About,"about")