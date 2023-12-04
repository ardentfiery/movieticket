"use client";

import Playtrailer from "./components/Playtrailer";
import Slider from "./components/homepage/Slider";
import Nowshowing from "./components/homepage/Nowshowing";
import { useState } from "react";

export default function Home() {
    const [play, setPlay] = useState(false);
    const showTrailer = () => {
        setPlay(true);
    };
    const hideTrailer=()=>{
        setPlay(false)
    }
    return (
        <div className="bg-white">
            <Slider showTrailer={showTrailer} />
            <Nowshowing upcoming={false} showTrailer={showTrailer}  />
            <Nowshowing upcoming={true} showTrailer={showTrailer}  />
            <div className="fixed z-50 top-0 h-screen ">{play && <Playtrailer hideTrailer={hideTrailer}/>}</div>
        </div>
    );
}
