import React from 'react'
import './Landing.css'
import Button from '../button/Button'
import gradient from '../../assets/gradient.png'
import iphone from '../../assets/iphone.png'
import { motion } from "framer-motion";

function Landing() {
  return (
    <div className='landing-wrapper'>
        <div className='landing-left'>
            <motion.h1 
                className='heading-1'
                initial={{opacity:0, y:50}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5}}
                >
                 Track Crypto</motion.h1>
            <motion.h1 className='heading-2'
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.5}}>Real Time.</motion.h1>
            <p className='para '>
                Track crypto through a public api in real time. Visit the dashboard to do so!
            </p>
            <div className='btn-flex'>
                <Button text="Dashboard"/>
                <Button text="Share App" outlined={true}/>
            </div>

        </div>

        <div className='landing-right'>
            <img src={gradient} className='gradient'/>
            <motion.img
                className="iphone"
                src={iphone}
                initial={{y:-10}}
                animate={{y:10}}
                transition={{
                    type:"smooth",
                    repeatType:"mirror",
                    duration:2,
                    repeat:Infinity
                }}
            
            />
            
                
        </div>


    </div>
  )
} 

export default Landing