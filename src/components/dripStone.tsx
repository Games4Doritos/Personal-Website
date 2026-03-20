"use client"
import {motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";
import Raindrop from "./raindrop";

interface props{
    dropDuration: number;
    width: string;
}

export default function DripStone({dropDuration, width}:props){
    return (
        <div className={`relative`}
            style={{width: width}}
        >
            <p 
            className="bg-white aspect-3/4"
            style={{
                clipPath:"polygon(0% 0%, 100% 0%, 50% 100%)",
            }}
            >
            </p>
            <div className="flex justify-center">
                <Raindrop dropDuration={dropDuration}/>
            </div>
        </div>
    );

}