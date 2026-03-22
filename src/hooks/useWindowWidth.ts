"use client"

import {useState, useEffect} from "react"

const useWindowWidth = () => {
    
    const [winW, setW] = useState(768);

    useEffect(() => {

        const handleResize = () => {
          setW(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {window.removeEventListener('resize', handleResize)};
      }, []);

    return winW;
}

export default useWindowWidth;