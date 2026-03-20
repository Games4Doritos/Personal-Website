"use client"
import {motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";

interface props{
    dropDuration: number;
}

export default function Raindrop({dropDuration}:props){

    return (
        <motion.div
            className="w-16 h-32 bottom-4 relative"
            style={{
                background:"var(--alt)",
                clipPath:"circle(1rem at 50% 1rem)"
            }}
            animate={{
                clipPath:[
                    "circle(0.05rem at 50% 1rem)",
                    "circle(1rem at 50% 1rem)",
                    "circle(0.9rem at 50% 20%)",
                    "circle(0.7rem at 50% 40%)",
                    "circle(0.4rem at 50% 60%)",
                    "circle(0.1rem at 50% 80%)",
                    "circle(0.05rem at 50% calc(100% - 0.05rem))"
                ],
            }}
            transition={{
                duration: dropDuration,
                repeat:Infinity,
                repeatType: "loop",
                ease:"easeInOut"
            }}
        
        >
        </motion.div>

    );

}