"use client"
import AnimSegment from "../../components/animSegment";
import DripStone from "../../components/dripStone";
import FluidBody from "../../components/fluidBody";
import useWindowWidth from "@/hooks/useWindowWidth";
import { ReactElement } from "react";
import Link from "next/link";

const experiences = [
    {
        title: "President of",
        link: "https://codersforcauses.org/",
        org: "Coders for Causes",
        date: "(2026 - Present)"

    },
    {
        title: "Local Government Child Safeguarding Project - E-Learning and Online Resources Intern at",
        link: "https://www.wa.gov.au/organisation/department-of-local-government-industry-regulation-and-safety",
        org: "LGIRS",
        date: "(2026 - Present)"
    },
    {
        title: "Ordinary Committee Member (Projects) for",
        link: "https://www.linkedin.com/company/game-development-uwa/",
        org: "Game Development UWA",
        date:"(2025 - Present)"
    },
    {
        title: "Summer Client Project Volunteer (Fullstack Developer) for",
        link: "https://codersforcauses.org/",
        org: "Coders for Causes",
        date: "(2025 - 2026)"
    },


];

const points: ReactElement[] = [
    <>
        University Student studying a Bachelor of Advanced Computer Science (Honours) 
        at <b>The University of Western Australia</b>, majoring in Artificial Intelligence
        <div className="pt-5">
            I&apos;m very interested in making games, web applications, and software!
        </div>
    </>,
    <>
        <div className="px-[calc(10%-1.25rem)]">
        {experiences.map((experience, id) => (
            <div className="text-left pb-5" key={id}>
                <p className="text-alt text-2xl absolute leading-5 "><b>&rarr;</b></p>
                <div className="pl-8">
                    {experience.title} 
                    <Link href={experience.link} target="_blank" className="mx-1">
                        <b><u>{experience.org}</u></b>
                    </Link> 
                    <p className="relative inline-block">{experience.date}</p>
                </div>
            </div>
        ))}
        </div>
    </>,
    <>
        For my full history and more details, check out my 
        <Link href="https://www.linkedin.com/in/evan-miocevich-615a81381/" target="_blank" className="mx-1">
            <b><u>LinkedIn</u></b>
        </Link>
    </>
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

export default function About(){

    
    const winW = useWindowWidth();
    
    return (
        <>
            <div className="bg-white text-center p-10 text-5xl ">Who am I?</div>
            <div className="mx-10">
                <div className="relative max-w-7xl mx-auto">
                    <p className="bg-white w-36 mx-auto h-20 relative flex shadow-[0_0_1rem_black] -z-1"></p>
                    {points.slice(0,points.length-1).map((point, id) =>
                        (<div key={id} className="shadow-[0_0_1rem_black]">
                            <div className="bg-white text-center p-7 w-full">
                                {point}
                            </div>
                            <div className="flex justify-center">
                                <p className="bg-white w-[10%] m-0 h-20 relative "></p>
                                <AnimSegment primary="#1a0033" secondary="#001a33"/>
                                <p className="bg-white w-[10%] m-0 h-20 relative"></p>
                            </div>
                        </div>
                        )
                    )}
                    <p className="bg-white text-center p-7 w-full shadow-[0_0_1rem_black]" >
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