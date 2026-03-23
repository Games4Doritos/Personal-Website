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
            style={{boxShadow:"0 0 1rem black"}}
        >
            <h3 className="text-xl text-center">
                {skill.name}
            </h3>
            <p className="">
                {skill.descr}
            </p>
            <p className="m-2.5 text-center">
                <i className={`devicon-${skill.icon} text-4xl text-(--alt)`}/>
            </p>
            {skill.recent == "" ? (
                <>
                </>
                ) : 
                <Link 
                    className="skillTooltip"
                    href={`/projects${skill.recent}`}
                >
                    <p className="">
                        Recent Project
                    </p>
                </Link>
                }
        </div>

    );


}