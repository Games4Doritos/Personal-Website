interface props{
    colour: string;
}


export default function FlowingEnergy ({colour}:props) {
    return (
    
        <>
        {[...Array(10)].map((segment, id) => (
            <div className={`w-10 md:h-5 h-2.5 z-1 relative inline-block animate-propagate`}
                style={{
                    width:"calc(100%/10)", 
                    animationDelay:`${Math.abs(4-id)/10}s`,
                    transform: "translateY(2rem)",
                    backgroundColor: colour,
                    boxShadow: `0 0 1rem ${colour}`,
                }}
                key={id}
            > 
            </div>
        ))}
        </>
    );
}