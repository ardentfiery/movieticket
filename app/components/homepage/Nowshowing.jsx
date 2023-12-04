"use client";

import { PlayCircleIcon } from "@heroicons/react/24/outline";
import styles from './slider.module.css'
import Playtrailer from "../Playtrailer";

const Nowshowing = ({upcoming,showTrailer,hideTrailer}) => {
    

   
    const movieArray = [
        {
            genre: "action",
            name: "x-men",
            description: "this is a very nice movie ",
            img_name: "movie4.jpg",
            rel_date:"september 28",
        },

        {
            genre: "action",
            name: "spiderman",
            description: "this is a very nice movie ",
            img_name: "movie2.jpg",
             rel_date:"september 28"
        },

        {
            genre: "action",
            name: "ironman",
            description: "this is a very nice movie ",
            img_name: "movie3.jpg",
             rel_date:"september 28"
        },
        {
            genre: "action",
            name: "x-men",
            description: "this is a very nice movie ",
            img_name: "movie4.jpg",
             rel_date:"september 28"
        },

        {
            genre: "action",
            name: "spiderman",
            description: "this is a very nice movie ",
            img_name: "movie2.jpg",
             rel_date:"september 28"
        },

        {
            genre: "action",
            name: "ironman",
            description: "this is a very nice movie ",
            img_name: "movie3.jpg",
             rel_date:"september 28"
        },
    ];
    return (
        <>
            <div className="mt-8 ml-6 font-bold text-2xl text-black ">{upcoming?"Up Coming":"Now Showing"}</div>
            <div className="flex justify-start flex-wrap gap-6 mt-8 ml-4 mb-6 ">
                {movieArray.map((nowmovie) => {
                    return (
                        <div className={`rounded-2xl bg-slate-50 text-black relative   ${styles.imageholds}`}>
                            <div className="z-0 ">
                                <img
                                    className={`h-80 w-96 object-cover rounded-t-2xl  `}
                                    src={nowmovie.img_name}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h1 className="text-center pt-2 pb-2">{nowmovie.name}</h1>
                               {upcoming &&  <h1 className="text-center">Release Date : {nowmovie.rel_date}</h1>}
                            </div>

                            <div className={`h-80 w-96 bg-slate-700 absolute top-0 z-50 text-center bg-opacity-50 font-bold text-white flex flex-col gap-3 justify-center items-center ${styles.buyticket}` }>
                                <PlayCircleIcon onClick={showTrailer} class="h-10 w-10 text-white-500 " />
                               {!upcoming && <p>Buy Ticket</p>}
                            </div>

                        </div>
                    );
                })}
              
            </div>
        </>
    );
};

export default Nowshowing;
