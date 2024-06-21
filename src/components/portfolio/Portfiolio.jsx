import React, { useRef } from 'react'
import './portfolio.scss'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Construction WebApplication",
        img:"./const.jpg",
        desc:"Developed a real-time web application for detailed information, showcases features tracking applications and improveing clients for business",
        
    },

    {
        id:2,
        title:"Weather",
        img:"./weather.jpg",
        desc:"Developed a Weather app to provide Accurate,Real-Time weather upates,forecasts.It enhances User Convenience,daily planing and preparedness for weather conditions",

    },

    {
        id:3,
        title:"Portfolio",
        img:"./pexels.jpg",
        desc:"Created a portfolio website to showcase my skills,It enhance personal Branding and provides a platform to demonstrate expertise and projects in an organized and visually appealling manner",

    },

    {
        id:4,
        title:"E-com site",
        img:"./ecom.jpg",
        desc:"Designed an E-Com website to facilitate online buying and selling of products.It provides an user friendly interfacedetailed product listing and order management ",

    },
];

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
                    <button>See Demo</button>
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
