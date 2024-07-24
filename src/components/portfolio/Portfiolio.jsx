import React, { useRef } from 'react'
import './portfolio.scss'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"construction App",
        img:"./const.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, hic corporis corrupti odit modi molestiae culpa ullam error eius ipsa?",
        link:"https://thola-associates-z2ac.vercel.app/"
    },
    {
        id:2,
        title:"ToDo Using MERN Stack",
        img:"./const.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, hic corporis corrupti odit modi molestiae culpa ullam error eius ipsa?",
        link:"https://mern-todo-1-0z77.onrender.com/",
    },

    {
        id:3,
        title:"Weather App",
        img:"./weather.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, hic corporis corrupti odit modi molestiae culpa ullam error eius ipsa?",
        link:"https://aatheessubash.github.io/first-BA/",
    },

    {
        id:4,
        title:"portfolio App",
        img:"./pexels.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, hic corporis corrupti odit modi molestiae culpa ullam error eius ipsa?",
        link:"https://portfolio-subash-seven.vercel.app/",
    },

    {
        id:5,
        title:"E-com App",
        img:"./ecom.jpg",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, hic corporis corrupti odit modi molestiae culpa ullam error eius ipsa?",
        link:"https://subashaathi.github.io/ai-rbnb/",
    },
]

const Single =({item})=> {
    const ref = useRef()

    const {scrollYProgress} =useScroll({target:ref,
        offset:["start start","end start"]});

    const y = useTransform(scrollYProgress,[0,1],["0%","300%"])

    return(
        <section ref ={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y:y}}>
                    <h2 >
                        {item.title}
                    </h2>
                    <p>{item.desc}</p>

                    <button key={item.id} onClick={() => window.open(item.link,'_blank')}>
                            see demo
                    </button>

                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfiolio = () => {

    const ref = useRef()

    const {scrollYProgress} =useScroll({target:ref,offset:["end end","start start"]});

    const scaleX = useSpring(scrollYProgress,{
            stiffness:100,
            damping:30
        });

  return (
    <div className="portfolio" ref = {ref}>
        <div className="progress">
            <h1>Featured works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfiolio
