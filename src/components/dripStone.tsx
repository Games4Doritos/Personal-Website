"use client"
import Raindrop from "./raindrop";

interface props{
    dropDuration: number;
    width: string;
}

export default function DripStone({dropDuration, width}:props){
    return (
        <div className="relative -z-1"
            style={{width: width}}
        >
            <div 
                className="bg-white aspect-3/4"
                style={{
                    clipPath:"polygon(0% 0%, 100% 0%, 50% 100%)",
                }}
            >
            </div>
            <div className="flex justify-center">
                <Raindrop dropDuration={dropDuration}/>
            </div>
        </div>
    );

}