"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import React from "react";
import {SocialIcon} from "react-social-icons";
import MovingText from "../components/movingText";


const cycleImages: string[] = ["/gameJam.png" ,"/leetShot.png", "/reactScreenshot.png"];
const imageDims: [number,number][] = [[2254,1419], [1324,784], [2182,1378]]

const links = ["https://github.com/games4doritos", "https://www.linkedin.com/in/evan-miocevich-615a81381/", 
  "https://leetcode.com/u/evanMio/", "mailto:evanmiocevich@gmail.com"]

let n: number = cycleImages.length;

export default function Page() {
  const [index, setIndex] = useState(0);
  const [winW, setW] = useState(768);
  const [spamPos, setSpam] = useState(0);
  const [arrowKey, setArrow] = useState(0);
  const [eggPrestige, setPrestige] = useState(0);

  const audioRef = useRef(null);

  function imgClick() {
    setIndex((index+1)%n);
  }
  //doesn't need dependency because it automatically re-renders when window size changes
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
      setSpam(0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('resize', handleResize)};
  }, []);

  useEffect(() => {
    const handleSpam = (event: KeyboardEvent) => {
      let totalLetters = Math.floor(winW/16)-2;
      if (! event.repeat){
        if (arrowKey === 0 && event.key === "ArrowLeft"){
          setArrow(1);
          if (spamPos === totalLetters-1 && audioRef.current !== null){
            audioRef.current.play()
            setPrestige(eggPrestige+1);
          }
          setSpam((spamPos+1)%totalLetters);
        }
        if (arrowKey === 1 && event.key === "ArrowRight"){
          setArrow(0);
          if (spamPos === totalLetters-1 && audioRef.current !== null){
            audioRef.current.play()
            setPrestige(eggPrestige+1);
          }
          setSpam((spamPos+1)%totalLetters);
          
        }
      }
    }
    window.addEventListener('keydown', handleSpam);
    return () => {window.removeEventListener('keydown', handleSpam)};
  },[spamPos]);

  return (
    <>
      <div className="bg-white text-center pt-10">
        <h1 className="text-5xl pb-10">Evan Miocevich</h1>
        <p className="pb-8">A Computer Science student passionate about Web Development (Next.js, React, Django), Game Development (Godot) and Software Engineering (Python, C)</p>
        <p>Click Me</p>
        <p>v</p>
      </div>
      <div className= "flex justify-center items-center">
        <button onClick={imgClick} className={`m-0 relative`} style={{width:`${winW < 768 ? "100%" : "50%"}`}}>
          <Image 
            src={cycleImages[index]}
            width={imageDims[index][0]} 
            height={imageDims[index][1]} 
            alt="/next.svg"
            loading="eager"
          />
        </button>
      </div>
      <button className="w-full">
        <div className="bg-white">
          <p className={`relative w-4 h-6 m-0`} style={{left:`${spamPos}rem`}}>{"🥚"}</p>
          <p>Alternate between Left and Right arrows to move me!</p>
          <p className="text-[#988933] pb-5">{eggPrestige === 0 ? "" : `Egg Prestige: ${eggPrestige}`}</p>
          <audio ref={audioRef} src={"/tadaCut.mp3"} id={'audio'}></audio>
        </div>
      </button>
      <div className="flex justify-center items-center p-8 flex-wrap">
        {links.map((link, id) =>
          (<SocialIcon url={link} key={id} className="p-10 m-4"/>)
        )}
      </div>
      <div className="text-xl text-white mx-auto">
        <div className="flex justify-center">
          <MovingText text="^"></MovingText>
        </div>
        <div className="flex justify-center">
          My Links
        </div>
      </div>
      <div className="bg-white p-5"></div>
    </>
  );
}
