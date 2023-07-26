import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"

import  {fadeIn, textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import { Tilt } from "react-tilt";
import { technologies } from "../constants"
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
       variants={fadeIn("right", "spring", 0.5*index,0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
       >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
        </motion.div>
      </Tilt>
  )
}
const Tech = () => {
  return (
    <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
  )
}

export default SectionWrapper(Tech,"")