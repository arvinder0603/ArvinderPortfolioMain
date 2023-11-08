import React from 'react'
import {VerticalTimeline ,VerticalTimelineElemen, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import {styles} from "../styles"
import 'react-vertical-timeline-component/style.min.css'
import {experiences} from "../constants/index"
import StarWrapper  from "../hoc/SectionWrpper"
import { textVariant } from '../utils/motion'



const ExperienceCard =({experience}) =>(
  <VerticalTimelineElement 
  contentStyle={{backgroundColor:'#1d1836',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon}
      alt={experience.company_name}
      className='w-[60%] object-contain h-[60%]'
      ></img>

    </div>
  }
  >

      <div>
        <h3 className='text-[24px] font-bold text-white '>
            {experience.title}
        </h3>
        <p className='text-secondary text-[16px] font-semibold m-0'  >{experience.company_name}</p>
         
      </div> 
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,indx)=>(
          <li key={`experience-point-${indx}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider "
          >
            {point}
          </li>
        ))}
      </ul>

  </VerticalTimelineElement> 
)

const Experience = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
    <div className='text-center mt-5 flex flex-col justify-center'>
      <p className={styles.sectionSubText}>What I have Done So FAR</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>


      </div>
      


    </motion.div>

    <div className='mt-20 flex flex-col'>
    <VerticalTimeline>
      {experiences.map((experience,index)=>(
        <ExperienceCard key={index} experience={experience}/>
      ))}
    </VerticalTimeline>
      
    </div>
   </>
  )
}

export default StarWrapper(Experience,'work')