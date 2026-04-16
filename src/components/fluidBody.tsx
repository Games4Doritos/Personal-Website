"use client"

import {motion} from "framer-motion"
import Image from "next/image";
import useWindowWidth from "../hooks/useWindowWidth";
import { useRef } from "react";

const prefix = process.env.NODE_ENV === 'production' ? '/personal-website' : '';

interface props{
    width: string;
}


 const bubble = (diameter:number, duration:number) => {
        return (
        <motion.div className="rounded-[50%] border-2 border-white mx-1"
            style={{
                width: `${diameter}rem`,
                height: `${diameter}rem`
            }}
            animate={{
                y:["20rem", `-${16+diameter}rem`],
                //y ranges from -h/2 to h/2
                //bubbles will start from h/2 + max_diameter + 1 and go up to -h/2 - 1 - diameter
                //all in rem
            }}
            transition={{
                ease:"easeIn",
                repeat: Infinity,
                repeatType: "loop",
                duration: diameter * (duration)
            }}
        >
        </motion.div>
        );
    }   

const bubbles: number[] =[4,3,3,4,2.5,2,3,1,4,2,3,3.5,2,4]
const durations: number[] = []
for (let i =0; i < bubbles.length; i++){
    durations.push(Math.random()*0.2+0.8)
}

export default function FluidBody({width}: props){

    const audioRef = useRef<HTMLAudioElement>(null);
    const winW = useWindowWidth();
    const waveSegments = winW < 768 ? 2: 3
    const pulseStart = 10;
    const waveSegment =  (
        <>
            {[...Array(20)].map((part, id) => (
                <motion.div className={`relative bg-alt inline-block h-16 top-16`} key={`${id} ${pulseStart}`}
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

    const jumpscarePlay = () => {
        if (audioRef.current != null) {
            audioRef.current.volume = 0.4;
            audioRef.current.play()
        }
    }
    
    return (
        <>
            <div style={{width:width}} className="m-0">
                <div key={waveSegments}>
                    {[...Array(waveSegments)].map((segment, id) => (
                        <span key={id}>
                            {waveSegment}
                        </span>
                    )
                    )}
                </div>
                <div 
                    className="h-150 w-full bg-alt flex justify-evenly m-0 overflow-clip items-center"
                >
                    <motion.div className="absolute z-1 max-w-1/2 max-h-72"
                        //max height of image will be 3/5 * h
                        animate={{
                            y:[10,-10,10],
                        }}
                        transition = {{
                            ease:"easeInOut",
                            repeat:Infinity,
                            repeatType:"loop",
                            duration:2
                        }}
                    >
                        <button onClick={jumpscarePlay}>
                            <Image
                                src={`${prefix}/me.jpg`}
                                width={598}
                                height={344}
                                alt=""
                                className="rounded-xl shadow-[0_0_1rem_white]"
                                loading="eager"
                            >
                            </Image>
                        </button>
                        <audio ref={audioRef} src={`${prefix}/fnaf2Jumpscare.mp3`}></audio>
                    </motion.div>
                    
                    {bubbles.map((diameter, id) =>
                        <div key={id} className="inline-block">
                            {bubble(diameter, durations[id])}
                        </div>
                    )}
                </div>
            </div>
        </>

    );

}