
import { useRef } from 'react'
import './services.scss'
import { useInView, motion} from "framer-motion"

const variants = {
  initial:{
    x:-500,
    opacity:0,
    
  },
  animate:{
    x:0,y:0,
    opacity:1,
    
    transition:{
      duration:1.5,
      staggerChildren:0.1,
    }
  }
}

const Services = () => {

  const ref =useRef()

    const isInView = useInView(ref,{margin:"-100px"})
  
  return (
    <motion.div className="services" 
    variants = {variants} 
    initial="initial" 
    //animate="animate"
    //whileInView={"animate"}
    ref = {ref}
    animate={isInView && "animate"}
    >
      <motion.div className="textContiner" variants = {variants}>
        <p> I focus on helping your brand grow<br/>
         and move forward</p>
         <hr />
      </motion.div>
      <motion.div className="titleContiner" variants = {variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <b>Unique </b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <b>For Your </b> Business.
            </h1>
            <button>WHAT WE DO..?</button>
        </div>
      </motion.div>
      <motion.div className="listContiner" variants = {variants}>
        <div className="box">
            <h2>Branding</h2>
            <p> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dolorem officiis veniam magnam 
                blanditiis, vitae necessitatibus magni, tenetur cum? 
            </p>
            <button>Go..</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dolorem officiis veniam magnam 
                facilis corporis optio expedita nisi reprehenderit omnis quis quo voluptatem deserunt libero,
                quidem officia velit suscipit blanditiis, vitae necessitatibus magni, tenetur cum? 
            </p>
            <button>Go..</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dolorem officiis veniam magnam 
                facilis corporis optio expedita nisi reprehenderit omnis quis quo voluptatem deserunt libero,
                quidem officia velit suscipit blanditiis, vitae necessitatibus magni, tenetur cum? 
            </p>
            <button>Go..</button>
        </div>
        <div className="box">
            <h2>Branding</h2>
            <p> 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dolorem officiis veniam magnam 
                facilis corporis optio expedita nisi reprehenderit omnis quis quo voluptatem deserunt libero,
                quidem officia velit suscipit blanditiis, vitae necessitatibus magni, tenetur cum? 
            </p>
            <button>Go..</button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services
