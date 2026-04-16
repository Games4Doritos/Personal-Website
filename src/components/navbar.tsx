import Link from "next/link"


const pages = [
    {href:"/", label:'Home'},
    {href:"/projects", label:'Projects'},
    {href:"/about", label:'About'}
];

export default function Navbar(){
    return (
        <div className="flex justify-center z-50">
            {pages.map((item) =>
            <Link href={item.href} key={item.href}>
                <div className="bg-alt p-3 text-white shadow-[0_0_0.5rem]">
                    {item.label}
                </div>
            </Link>
            )}
        </div>
    );

}