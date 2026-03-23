"use client"
import {motion} from "framer-motion"
import Image from "next/image";
import useWindowWidth from "../hooks/useWindowWidth";

interface props{
    width: string;
}

export default function FluidBody({width}: props){

    const winW = useWindowWidth();

    const waveSegments = winW < 768 ? 2: 3
    const pulseStart = 10;  
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
                y:["20rem", `-${16+diameter}rem`],
                //y ranges from -h/2 to h/2
                //bubbles will start from h/2 + max_diameter + 1 and go up to -h/2 - 1 - diameter
                //all in rem
            }}
            transition={{
                ease:"easeIn",
                repeat: Infinity,
                repeatType: "loop",
                duration: diameter * (0.8 + 0.2 * Math.random())
            }}
        >
        </motion.div>
    )   

    const bubbles =[4,3,3,4,2.5,2,3,1,4,2,3,3.5,2,4]

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
                    className="h-120 w-full bg-(--alt) flex justify-evenly m-0 overflow-clip items-center"
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
                        <Image
                            src="/me.jpg"
                            width={598}
                            height={344}
                            alt=""
                            className="rounded-xl"
                            style={{boxShadow: "0 0 1rem black"}}
                        >
                        </Image>
                    </motion.div>
                    
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