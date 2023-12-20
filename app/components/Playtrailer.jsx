import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const Playtrailer = ({hideTrailer,trailerLink}) => {
    console.log(trailerLink)
    return (
        <div className="w-screen h-full flex justify-center items-center bg-[#a5bbd286]">
            <div className="w-[900px]  shadow-lg shadow-black rounded ">
                <div className="flex justify-end ">
                    <XCircleIcon onClick={hideTrailer} className="h-8 w-8 text-black cursor-pointer hover:text-red-600   " />
                </div>

                <iframe
                    width="900"
                    height="450"
                    src={trailerLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default Playtrailer;
