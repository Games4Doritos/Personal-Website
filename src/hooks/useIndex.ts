"use client"

import { useState } from "react";

const useIndex = (n:number) => {

    const [index, setIndex] = useState(0);

    const update = () => {
        setIndex((index+1)%n)
    }

    return {index, update}

}

export default useIndex;