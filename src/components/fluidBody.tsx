"use client"
import {motion, useAnimate, stagger, MotionConfig} from "framer-motion"
import {useState, useEffect} from "react";

interface props{
    width: string;
}

export default function FluidBody({width}: props){

    const partitions: number[] = [];
    const waveSegments = 3;
    const pulseStart = 10;
    for (let i =0; i < 20; i++){
        partitions.push(0)
    }    
    /*const [, animate] = useAnimate()
    useEffect(()=>{
        const controls = animate([
            ["p", {y: [0,-50,0]}, {delay: stagger(0.01), ease:"easeInOut"}],
        ])
        controls.speed = 0.3

        return () => controls.stop()
    }, []) */
    const waveSegment =  (
        <>
            {partitions.map((part, id) => (
                <motion.div className={`relative bg-(--alt) inline-block h-16 top-16`} key={`${id} ${pulseStart}`}
                    style={{width:`${1/waveSegments*5}%`}}
                    animate={{
                        y:[0, -50 , 0]
                    }}
                    transition={{
                        duration:2,
                        ease:"easeInOut",
                        delay: Math.abs(pulseStart-id)/20,
                        repeatType: "loop",
                        repeat: Infinity
                    }}
                >
                </motion.div>
            )
            )}
        </>
        )

    return (
        <>
            <div style={{width:width}} className="inline-block relative m-0">
                {waveSegment}
                {waveSegment}
                {waveSegment}
                {/*<motion.div 
                    className="h-72 w-full bg-(--alt) relative"
                    style={{
                        backgroundSize: "200% 200%",
                        backgroundImage: "radial-gradient(circle at center, white -10%, var(--alt) 1%"
                    }}
                    animate = {{
                        backgroundPositionY: [
                            "0%",
                            "80%",
                            "0%"
                        ],
                        backgroundPositionX: [
                            "0%",
                            "120%"
                        ]

                    }}
                    transition = {{
                        backgroundPositionY: {
                            duration: 1.5,
                            ease: "easeInOut",
                            repeatType: "loop",
                            repeat: Infinity

                        },
                        backgroundPositionX: {
                            duration: 2,
                            ease: "linear",
                            repeatType: "loop",
                            repeat: Infinity

                        }
                    }}
                >
                </motion.div>*/}
                <div
                    style={{
                        backgroundImage: "radial-gradient(circle at var(--x) var(--y), white -10%, var(--alt) 10%)",
                    }}
                    className="h-72 w-full bg-(--alt) relative inline-block"
                >
                </div>
            </div>
        </>

    );

}