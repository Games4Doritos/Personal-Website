import Link from "next/link";

export default function notFound(){
    return (
        <>
            <div className="text-white text-4xl text-center my-15 p-5 w-fit mx-auto shadow-[0_0_1rem_black] rounded-2xl">
                <b>Oh No! The page couldn&apos;t be found!</b> 
                <p className="pt-5"><b>404</b></p>
            </div>
            <Link
                href="/"  
            >
                <div className="text-center bg-white w-fit mx-auto p-5 rounded-3xl animate-border border mb-15">
                    Return to Home
                </div>
            </Link>
        </>
    );
}