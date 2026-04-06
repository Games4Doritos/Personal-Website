
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Evan Miocevich - Projects",
    description: "My Projects",
};

export const projects = [
        {title: "Gravity Bender",
        description: "A 3D platform shooter developed in the second UWA Game Jam. Programmed by Me and Joshua Noble (PatronSaintOfEpicGamers), with the music created by transient luminous events",
        thumbnail: "/gravityBender.png",
        link: "https://patronsaintofepicgamers.itch.io/gravity-bender",
        id: "gravityBender"
        },
        {title: "Movie Collection Web Application",
        description: "A web-application made in react that displays currently popular movies and allows your to search for and favourite any of them to add to your collection. Uses an API from The Movie Database (TMDB)",
        thumbnail: "/movieShot.png",
        link:"http://github.com/Games4Doritos/Movie-Collection-App-React-Tutorial-Project-",
        id: "movieCollection"
        },
        {title: "Card Battle Game (Prototype)",
        description: "A turn-based card game where you can damage other player's hp bar by playing cards in their discard pile. Being made in Godot 4.",
        thumbnail: "/prototypeScreenshot.png",
        link:"https://github.com/Games4Doritos/Card-Game-Prototype",
        id: "cardGame"
        },
        {title: "Survival Escape Game (Prototype)",
        description: "A game set in a large mysterious park (3D) monitored by an organisation where you have to gather items from past players and craft to ultimately escape the confines. Being made in Godot 4",
        thumbnail: "/3dGameShot.png",
        link: "",
        id: "survivalGame"
        },
    ];

export default function Projects() {
   
    
    return (
        <>
            <div className="bg-white text-center p-10 text-5xl">
                My Projects!
            </div>
            <div className="flex flex-wrap justify-center p-5">
            {projects.map((project, id) => (
                <Link
                    href={`/projects/${project.id}`}
                    key = {id}
                    className="bg-white rounded-3xl p-5 m-5 animate-border border w-xl "
                >
                    <h1 className="text-3xl text-center">{project.title}</h1>
                    <div className="relative aspect-5/3 scale-90">
                        <Image
                        src={project.thumbnail}
                        alt="/next.svg"
                        fill
                        sizes="max-width: 71.1rem"
                        />
                    </div>
                </Link>
            )
            )}
            </div>
        </>
    );
}