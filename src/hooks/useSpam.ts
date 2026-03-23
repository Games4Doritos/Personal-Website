"use client"

import { useEffect, useState, useRef } from "react";

const useSpam = (winW: number) => {

    const [spamPos, setSpam] = useState(0);
    const [arrowKey, setArrow] = useState(0);
    const [eggPrestige, setPrestige] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        setSpam(0);
      }, [winW]);

    useEffect(() => {
        const handleSpam = (event: KeyboardEvent) => {
          let totalLetters = Math.floor(winW/16)-2;
          if (! event.repeat){
            if (arrowKey === 0 && event.key === "ArrowLeft"){
              setArrow(1);
              if (spamPos >= totalLetters-1 && audioRef.current !== null){
                audioRef.current.play()
                setPrestige(eggPrestige+1);
              }
              setSpam((spamPos+1)%totalLetters);
            }
            if (arrowKey === 1 && event.key === "ArrowRight"){
              setArrow(0);
              if (spamPos >= totalLetters-1 && audioRef.current !== null){
                audioRef.current.play()
                setPrestige(eggPrestige+1);
              }
              setSpam((spamPos+1)%totalLetters);
            }
          }
        }
        window.addEventListener('keydown', handleSpam);
        return () => {window.removeEventListener('keydown', handleSpam)};
      },[spamPos]);

      return {spamPos, eggPrestige, audioRef}

}

export default useSpam