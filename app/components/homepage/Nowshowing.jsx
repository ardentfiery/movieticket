"use client";

import { PlayCircleIcon } from "@heroicons/react/24/outline";
import styles from './slider.module.css'
import Playtrailer from "../Playtrailer";

const Nowshowing = ({upcoming,showTrailer,hideTrailer,movieList,settrailerLink}) => {
    

   
    return (
        <>
            <div className="mt-8 ml-6 font-bold text-2xl text-black ">{upcoming?"Up Coming":"Now Showing"}</div>
            <div className="flex justify-start flex-wrap gap-6 mt-8 ml-4 mb-6 ">
                {movieList.map((movie,index) => {
                    return (
                        <div key={index} className={`rounded-2xl bg-slate-50 text-black relative   ${styles.imageholds}`}>
                            <div className="z-0 ">
                                <img
                                    className={`h-80 w-96 object-cover rounded-t-2xl  `}
                                    src={`${movie?.attributes?.image?.data[0]?.attributes?.url}`}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h1 className="text-center pt-2 pb-2">{movie.attributes.name}</h1>
                               {!movie.attributes.now_showing ? <h1 className="text-center">Release Date : {movie.attributes.releasing_date}</h1>:null}
                            </div>

                            <div className={`h-80 w-96 bg-slate-700 absolute top-0 z-50 text-center bg-opacity-50 font-bold text-white flex flex-col gap-3 justify-center items-center ${styles.buyticket}` }>
                                <PlayCircleIcon onClick={()=>{
                                    showTrailer()
                                    settrailerLink(movie.attributes.trailer_link)
                                }} className="h-10 w-10 text-white-500 " />
                               {movie.attributes.now_showing ? <p>Buy Ticket</p>:null}
                            </div>

                        </div>
                    );
                })}
              
            </div>
        </>
    );
};

export default Nowshowing;
