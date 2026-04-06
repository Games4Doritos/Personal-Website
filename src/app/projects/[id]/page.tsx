import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../page";
import useWindowWidth from "../../../hooks/useWindowWidth";

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
    if (!project) notFound();

    return (
        <>
            <div className="bg-white text-center p-10 w-full text-5xl">
                {project.title}
            </div>
            <div className="w-24 h-32 bg-white relative mx-auto shadow-[0_0_1rem_black] -z-1"></div>
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
                    <Link href={project.link === "" ? "/projects" : project.link}>
                        <h1 className="text-3xl bg-cyan-600 rounded-2xl w-fit px-4 text-white shadow-[0_0_1rem_black]">{project.link === "" ? "" : "Check it out here"}</h1>
                    </Link>
                </div>
                {sidebar}
            </div>
        </>
    );
}