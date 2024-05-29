import { useState } from "react"
import Links from "./Links/Links.jsx"
import "./sidebar.scss"
import ToggleButton from "./toggleButton/ToggleButton"
import { motion} from "framer-motion"


const variants = {
  open:{
    clipPath:"circle(1200px at 50px 50px )",
    Transition:{
      type:"spring",
      stiffness:20,
    },
  },
  closed:{
    clipPath:"Circle(30px at 50px 50px)",
    Transition:{
      delay:0.4,
      type:"spring",
      stiffness:400,
      damping:40,
    }
  },
};

const Sidebar = () => {

  const[open,setOpen] = useState(false)



  return  (
          <motion.div className="sidebar" animate={open ? "open" : "closed"}>
          <motion.div className="bg" variants={variants}>
              <Links/>
          </motion.div>
             <ToggleButton setOpen ={setOpen}/>
          </motion.div>
          
    );
   

};

export default Sidebar;
