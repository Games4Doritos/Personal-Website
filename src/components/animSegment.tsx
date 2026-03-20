"use client"
import {motion} from "framer-motion"

interface props{
    primary: string;
    secondary: string
}

export default function AnimSegment({primary, secondary}: props){
    return (
        <motion.div
            style={{
                background: `radial-gradient(circle at 20% 20%, ${primary} 0%, var(--alt) 100%)`,
            }}
            className="h-20 relative w-[80%] m-0"
            animate={{
                background: [
                `radial-gradient(circle at 20% 20%, ${primary} 0%, var(--alt) 100%)`,
                `radial-gradient(circle at 80% 80%, ${secondary} 0%, var(--alt) 100%)`,
                `radial-gradient(circle at 80% 20%, ${primary} 0%, var(--alt) 100%)`,
                `radial-gradient(circle at 20% 80%, ${secondary} 0%, var(--alt) 100%)`,
                ],
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease:"easeInOut"
            }}
            />
    );

}