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
        <div className="skill rounded-xl m-3 p-5 w-72"
            style={{boxShadow:"0 0 1rem grey"}}
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
                    href={`/projects${skill.recent}`}
                >
                    <p 
                        className="rounded-xl border border-black w-fit p-1"
                        style={{textShadow: "0 0 1rem black"}}
                    >
                        Recent Project
                    </p>
                </Link>
                }
        </div>

    );


}