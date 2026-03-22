"use client"
import AnimSegment from "../../components/animSegment";
import DripStone from "../../components/dripStone";
import FluidBody from "../../components/fluidBody";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function About(){

    const points: string[] =[
        `University Student studying a Bachelor of Advanced Computer Science (Honours) 
        at The University of Western Australia, majoring in Artificial Intelligence`,
        `Ordinary Committee Member (Projects) for Game Development UWA`,
        `Very interested in making games, websites, and software!`
    ];

    type dripstone = {
        duration: number;
        width: string;
    }

    const dripStones: dripstone[] = [
        {duration: 2, width: "7rem"},
        {duration: 1, width: "6rem"},
        {duration: 4, width: "10rem"},
        {duration: 2, width: "6rem"},
        {duration: 3, width: "8rem"},
        {duration: 2, width: "7rem"}
    ];
    //calculating total width of all dripStones to determine the percentage width 
    //that they will have when the element gets short enough
    let totalW: number = 0
    for (let i:number = 0; i < dripStones.length; i++){
        totalW += Number(dripStones[i].width.split("rem")[0]) 
    }
    totalW *= 16
    const winW = useWindowWidth();
    
    return (
        <>
            <div className="bg-white text-center p-10 w-full">
                <h1 className="text-5xl">Who am I?</h1>
            </div>
            <div className="mx-10">
                <div className="relative max-w-7xl mx-auto">
                    <p className="bg-white w-36 mx-auto h-20 relative flex"></p>
                    {points.slice(0,points.length-1).map((point:string, id) =>
                        (<div key={id}>
                            <p className="bg-white text-center p-7 w-full">
                                {point}
                            </p>
                            <div className="flex justify-center">
                                <p className="bg-white w-[10%] m-0 h-20 relative "></p>
                                <AnimSegment primary="#1a0033" secondary="#001a33"/>
                                <p className="bg-white w-[10%] m-0 h-20 relative"></p>
                            </div>
                        </div>
                        )
                    )}
                    <p className="bg-white text-center p-7 w-full" >
                        {points.at(-1)}
                    </p>
                    <div className="flex justify-evenly">
                        {dripStones.map((stone, id) => (
                            <DripStone 
                                dropDuration={stone.duration} 
                                width={winW < totalW ? `calc(${16 * Number(stone.width.split("rem")[0])}/${totalW}*100%)` : stone.width} 
                                key={id}
                            />)
                        )}
                    </div>  
                </div>
            </div>
            <FluidBody width={"100%"}/>
        </>
    );
}