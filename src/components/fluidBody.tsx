"use client"
import {motion, useAnimate, stagger, MotionConfig} from "framer-motion"
import {useState, useEffect} from "react";
import Image from "next/image";

interface props{
    width: string;
}

export default function FluidBody({width}: props){

    const waveSegments = 3;
    const pulseStart = 10;  
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
            {[...Array(20)].map((part, id) => (
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

    const bubble = (diameter:number) => (
        <motion.div className="rounded-[50%] border-2 border-white mx-1"
            style={{
                width: `${diameter}rem`,
                height: `${diameter}rem`
            }}
            animate={{
                y:["24rem", `-${13+diameter}rem`],
            
            }}
            transition={{
                ease:"easeIn",
                repeat: Infinity,
                repeatType: "loop",
                duration: diameter
            }}
        >
        </motion.div>
    )   

    const bubbles =[4,3,3,4,2.5,2,3,1,4,2,3,3.5,2,4]

    return (
        <>
            <div style={{width:width}} className="m-0">
                {waveSegment}
                {waveSegment}
                {waveSegment}
                {/*
                <motion.div
                    className="h-72 w-full bg-(--alt) relative inline-block m-0"
                    animate={{
                        "--x": [0,1],
                    }}
                    transition={{
                        "--x":{
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'linear',
                            duration:2
                        },
                    }}
                    style={{
                        background:"radial-gradient(circle at calc(var(--x)*100%) calc(50% + sin(var(--x)*360deg)*30%),  white -10%, var(--alt) 10%)",
                    }}
                >
                </motion.div>
                */}
                <div 
                    className="h-96 w-full bg-(--alt) flex justify-evenly m-0 overflow-clip items-center"
                >
                    <div className="absolute z-1 aspect-5/3 max-w-1/2 max-h-72">
                        <Image
                            src="/gameJam.png"
                            width={2254}
                            height={1419}
                            alt=""
                            className=""
                        >
                        </Image>
                    </div>
                    
                    {bubbles.map((diameter, id) =>
                        <div key={id} className="inline-block">
                            {bubble(diameter)}
                        </div>
                    )}

                </div>

            </div>
        </>

    );

}