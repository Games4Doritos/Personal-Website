import Image from "next/image";
import Link from "next/link";
import { projects } from "../page";

interface props {
    params: Promise<{id:string}>;
}


export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

const sidebar = (
    <div 
        className="inline-block relative h-24 bg-white my-auto shadow-[0_0_1rem_black] -z-1" 
        style={{width:"calc(max((100% - 64rem)/2, 10%))"}}
    >
    </div>
);

export default async function Page({ params }:props) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) {
        return (
            <>
                <div className="text-white text-4xl text-center my-15 p-5 w-fit mx-auto shadow-[0_0_1rem_black] rounded-2xl">
                    <b>Oh No!  A project with that ID doesn't exist!</b>
                </div>
                <Link
                    href="/projects"  
                >
                    <div className="text-center bg-white w-fit mx-auto p-5 rounded-3xl animate-border border mb-15">
                        Return to Projects page
                    </div>
                </Link>
            </>
        );

    }

    return (
        <>
            <div className="bg-white text-center p-10 w-full text-5xl">
                {project.title}
            </div>
            <div className="flex w-full">
                <div className="text-white text-5xl py-10 pl-5 sm:pl-10 w-1/10">
                    <Link
                    href="/projects"
                    >
                        <b className="hover:text-shadow-[0_0_1rem_black]">&larr;</b>
                    </Link>
                </div>
                <div className="w-24 h-32 bg-white relative shadow-[0_0_1rem_black] -z-1 ml-[calc(40%-3rem)]"></div>
            </div>
            <div className="flex justify-center mb-16">
                {sidebar}
                <div 
                    className="bg-white rounded-3xl p-5 w-8/10 max-w-5xl shadow-[0_0_1rem_black]"
                >
                    <p className="my-5">{project.description}</p>
                    <div className="relative aspect-5/3 mb-10 mt-5 mx-auto scale-90">
                        <Image
                        src={project.thumbnail}
                        alt="/next.svg"
                        fill
                        sizes="max-width: 71.1rem"
                        />
                    </div>
                    <Link 
                        href={project.link === "" ? "/projects" : project.link}
                        target="_blank"
                    >
                        <h1 className="text-3xl bg-cyan-600 rounded-2xl w-fit px-4 text-white shadow-[0_0_1rem_black]">
                            {project.link === "" ? "" : "Check it out here!"}
                        </h1>
                    </Link>
                </div>
                {sidebar}
            </div>
        </>
    );
}