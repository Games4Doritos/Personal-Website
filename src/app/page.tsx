"use client"

import Image from "next/image";
import {SocialIcon} from "react-social-icons";
import MovingText from "../components/movingText";
import useWindowWidth from "../hooks/useWindowWidth";
import useSpam from "../hooks/useSpam";
import useIndex from "../hooks/useIndex";
import SkillCard, {skill} from "../components/skillCard";

const cycleImages: string[] = ["/gameJam.png" ,"/reactScreenshot.png", "/leetShot.png", "/nextShot.png" , "/djangoShot.png" , "/cShot.png"];
const imageDims: [number,number][] = [[2254,1419], [2182,1378], [1324,784], [2250,1428], [2254,1422], [2254,1293]]

const links = ["https://github.com/games4doritos", "https://www.linkedin.com/in/evan-miocevich-615a81381/", 
  "https://leetcode.com/u/evanMio/", "mailto:evanmiocevich@gmail.com"]

let n: number = cycleImages.length;

const skills: skill[] = [
  {name:"Front-End Development", descr:"Developing responsive pages and UI in React and Next.js", icon:"react-plain", recent:"movieCollection"},
  {name:"Back-End Development", descr:"Creating applications and using APIs in Django and Flask", icon:"python-plain", recent:""},
  {name:"Game Development", descr:"Building games from scenes, scripts and assets in Godot", icon:"godot-plain", recent:"gravityBender"}
]

export default function Page() {
  const {index, update} = useIndex(n);
  const winW = useWindowWidth();
  const {spamPos, eggPrestige, audioRef} = useSpam(winW);

  return (
    <>
      <div className="bg-white text-center pt-10">
        <h1 className="text-5xl pb-10">Evan Miocevich</h1>
        <p className="pb-8 px-10">Computer Science Student and aspiring Full Stack Developer</p>
        
        <p>Click Me</p>
        <p>v</p>
      </div>
      <div className= "flex justify-center items-center">
        <button onClick={update} className="m-0 relative max-w-156 w-full">
          <Image 
            src={cycleImages[index]}
            width={imageDims[index][0]} 
            height={imageDims[index][1]} 
            alt="/next.svg"
            loading="eager"
          />
        </button>
      </div>
      <div className="w-full bg-white">
        <h3 className=" text-center text-4xl pt-10">
          My Skills
        </h3>
        <div className="flex justify-center p-5 flex-wrap">
          {skills.map((skill, id) => (
            <SkillCard skill={skill} key={id}/>
            ))
          }
        </div>
        <div>
          <p className="relative w-4 h-6 m-0" style={{left:`${spamPos}rem`}}>{"🥚"}</p>
          <div className="text-center">
            <p className="px-10">Alternate between Left and Right arrows to move me!</p>
            <p className="text-[#988933] pb-5">{eggPrestige === 0 ? "" : `Egg Prestige: ${eggPrestige}`}</p>
            <audio ref={audioRef} src={"/tadaCut.mp3"} id={'audio'}></audio>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-8 flex-wrap">
        {links.map((link, id) =>
          (<SocialIcon url={link} key={id} target="_blank" className="p-10 m-4 hover:scale-105"/>)
        )}
      </div>
      <div className="text-xl text-white flex justify-center">
          <MovingText 
            text={
              <>
                <div className="text-center">^</div>
                <div className="text-center">My Links</div>
              </>
          }
          >
          </MovingText>
      </div>
      <div className="bg-white p-10"></div>
    </>
  );
}
