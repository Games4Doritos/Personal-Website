import 'devicon/devicon.min.css';
import Link from 'next/link';

export type skill = {
    name: string;
    descr: string;
    icon: string;
    recent: string;
}

interface props {
    skill: skill
}

export default function SkillCard({skill}:props){
    

    return (
        <div className="skill rounded-xl m-3 p-5 w-72 shadow-[0_0_1rem_grey]"
            
        >
            <h3 className="text-xl text-center">
                {skill.name}
            </h3>
            <p className="">
                {skill.descr}
            </p>
            <p className="mt-5 m-3 text-center">
                <i className={`devicon-${skill.icon} text-5xl text-(--alt)`}/>
            </p>
            {skill.recent == "" ? (
                <></>
                ) : 
                <Link 
                    className="skillTooltip"
                    href={`/projects/${skill.recent}`}
                >
                    <p 
                        className="rounded-xl border border-black w-fit p-1 hover:text-shadow-[0_0_1rem_black]"
                    >
                        Recent Project
                    </p>
                </Link>
                }
        </div>

    );


}