"use client"
import {motion} from "framer-motion"


export default function AnimBackground(){
    return (
        <motion.div
            style={{
                background: "radial-gradient(circle at 20% 20%, #1a0033 0%, var(--background) 100%)",
            }}
            className="fixed inset-0 -z-10 w-full h-full"
            animate={{
                background: [
                "radial-gradient(circle at 20% 20%, #1a0033 0%, var(--background) 100%)",
                "radial-gradient(circle at 80% 80%, #001a33 0%, var(--background) 100%)",
                "radial-gradient(circle at 80% 20%, #1a0033 0%, var(--background) 100%)",
                "radial-gradient(circle at 20% 80%, #001a33 0%, var(--background) 100%)",
                ],
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "mirror",
                ease:"easeInOut"
            }}
            />
    );

}