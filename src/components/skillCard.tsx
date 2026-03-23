import 'devicon/devicon.min.css';

export type skill = {
    name: string;
    descr: string;
    icon: string;
}

interface props {
    skill: skill
}

export default function SkillCard({skill}:props){
    

    return (
        <div className="skill rounded-xl m-3 p-5 w-72"
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
        </div>

    );


}