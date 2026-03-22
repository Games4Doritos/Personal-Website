
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Evan Miocevich - Projects",
    description: "My Projects",
};

export default function Projects() {
   
    const projects = [
        {title: "Card Battle Game (Prototype)",
        description: "A turn-based card game where you can damage other player's hp bar by playing cards in their discard pile. Being made in Godot 4.",
        thumbnail: "/prototypeScreenshot.png",
        link:"https://github.com/Games4Doritos/Card-Game-Prototype"
        },
        {title: "Survival Escape Game (Prototype)",
        description: "A game set in a large mysterious park (3D) monitored by an organisation where you have to gather items from past players and craft to ultimately escape the confines. Being made in Godot 4",
        thumbnail: "/3dGameShot.png",
        link: "",
        },
        {title: "Movie Collection Web Application",
        description: "A web-application made in react that displays currently popular movies and allows your to search for and favourite any of them to add to your collection. Uses an API from The Movie Database (TMDB)",
        thumbnail: "/movieShot.png",
        link:"http://github.com/Games4Doritos/Movie-Collection-App-React-Tutorial-Project-"
        },
    ];
    return (
        <>
            <div className="bg-white text-center p-10">
                <h1 className="text-5xl">Evan's <del>Silly</del>Great Projects!</h1>
            </div>
            {projects.map((project, id) => {
                return (
                    <div key={id} className="bg-white rounded-3xl p-5 m-10 animate-border border-2 w-8/10 max-w-5xl mr-auto ml-auto">
                        <h1 className="text-3xl">{project.title}</h1>
                        <p className="my-5">{project.description}</p>
                        <div className="relative aspect-5/3 mb-10 mt-5 ml-auto mr-auto lg:scale-90 md:scale-100 sm:scale-100">
                            <Image
                            src={project.thumbnail}
                            alt="/next.svg"
                            fill
                            />
                        </div>
                        <Link href={project.link === "" ? "/projects" : project.link}>
                            <h1 className="text-3xl bg-cyan-600 rounded-2xl w-fit px-4 text-white">{project.link === "" ? "" : "Check it out here"}</h1>
                        </Link>
                    </div>
                );
            }
            )}
        </>
    );
}