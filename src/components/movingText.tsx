"use client"
import {motion} from"framer-motion"
import "react"
interface props{
    text:string;
}

export default function MovingText({text}:props){
    
    return (
        <motion.div className="inline-block relative text-white top-2"
            animate={{
                y:[0,-20,0]
            }}
            transition={{
                duration:1.25,
                repeat:Infinity,
                repeatType: "loop",
                ease: "easeInOut"
            }}
        >
        {text}
        </motion.div>


    );

}