import Image from "next/image";
import Link from "next/link";
import { projects } from "../page";
import FlowingEnergy from "../../../components/flowingEnergy";

interface props {
    params: Promise<{id:string}>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function Page({ params }:props) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) {
        return (
            <>
                <div className="text-white text-4xl text-center my-15 p-5 w-fit mx-auto shadow-[0_0_1rem_black] rounded-2xl">
                    <b>Oh No! A project with that ID doesn't exist!</b> 
                    <p className="pt-5"><b>404</b></p>
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
            <div className="bg-white px-10 pb-10 pt-1 text-center">
                <div className="  w-fit inline-block ">
                    <Link
                    href="/projects"
                    >
                        <p className="hover:text-shadow-[0_0_1rem_black] text-xl text-zinc-700 p-4">&larr; Return to All Projects</p>
                    </Link>
                </div>
                <div className="w-full text-5xl">
                    {project.title}
                </div>
            </div>
            <div
                className="h-24 bg-white relative shadow-[0_0_1rem_black] -z-1 mx-auto"
                style={{
                    transform: "rotate(90deg)",
                    width: "calc(max((100% - 64rem)/2, 10%))",
                    marginTop: "calc((max((100% - 64rem)/2, 10%) - 6rem)/2)",
                    marginBottom: "calc((max((100% - 64rem)/2, 10%) - 6rem)/2)"
                }}
            >
                <FlowingEnergy colour="crimson"/>
            </div>
            <div className="flex justify-center mb-16">
                <div 
                    className="inline-block relative h-24 my-auto shadow-[0_0_1rem_black] -z-1 bg-white" 
                    style={{
                        width:"calc(max((100% - 64rem)/2, 10%))",
                    }}
                >
                    <FlowingEnergy colour="lime"/>
                </div>
                <div 
                    className="bg-white rounded-3xl p-5 w-8/10 max-w-5xl border animate-border"
                >
                    <p className="p-5">{project.description}</p>
                    <div className="relative aspect-5/3 mb-10 mt-5 mx-auto scale-90">
                        <Image
                        src={project.thumbnail}
                        alt="/next.svg"
                        fill
                        sizes="max-width: 71.1rem"
                        loading="eager"
                        />
                    </div>
                    <Link 
                        href={project.link}
                        target="_blank"
                        className={project.link === "" ? "hidden" : ""}
                    >
                        <h1 className="text-2xl p-2 rounded-3xl w-fit shadow-[0_0_1rem_black] hover:scale-105">
                            Check it out here!
                        </h1>
                    </Link>
                </div>
                <div 
                    className="inline-block relative h-24 my-auto shadow-[0_0_1rem_black] -z-1 bg-white" 
                    style={{
                        width:"calc(max((100% - 64rem)/2, 10%))",
                    }}
                >
                    <FlowingEnergy colour="cornflowerblue"/>

                </div>
            </div>
            
        </>
    );
}