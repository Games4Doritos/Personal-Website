import Image from "next/image"
import Link from "next/link"


const pages = [
    {href:"/", label:'Home'},
    {href:"/projects", label:'Projects'},
    {href:"/about", label:'About'}
];

export default function Navbar(){
    return (
        <div className="flex justify-center z-50" >
            {pages.map((item) =>
            <Link href={item.href} key={item.href}>
                <div className="bg-cyan-600 p-2 text-white">
                    {item.label}
                </div>
            </Link>
            )}
        </div>
    );

}