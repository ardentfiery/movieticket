"use client";
import React from "react";
import { useRef } from "react";
import styles from "./slider.module.css";

const Slider = ({showTrailer, movieList,settrailerLink}) => {
    const sliderRef = useRef(null);
    const rightSlider = () => {
        sliderRef.current.scrollBy(window.innerWidth, 0);
    };
    const leftSlider = () => {
        sliderRef.current.scrollBy(-window.innerWidth, 0);
    };
    
    return (
        <div className={styles.sliderholder}>
            <button
                onClick={leftSlider}
                style={{ top: "32vh" }}
                className="bg-red-500 h-10 w-10 absolute left-5"
            >
                {"<"}
            </button>
            <button
                onClick={rightSlider}
                style={{ top: "32vh" }}
                className="bg-red-500 h-10 w-10 absolute right-5"
            >
                {">"}
            </button>
            <div ref={sliderRef} className={styles.scrolldiv}>
                {movieList.map((movie,index) => {
                    return (
                        <div key={index}
                            style={{
                                backgroundImage: `url(${movie?.attributes?.image?.data[0]?.attributes?.url})`,
                            }}
                            className={styles.imageholder}
                        >
                            <div className={styles.onemoviedetail}>
                                <div className="text-lg">{movie.attributes.genre}</div>
                                <div className="text-5xl"> {movie.attributes.name}</div>
                                <div style={{wordWrap:"break-word"}} className="text-lg w-[60vw]"><p className="">{movie.attributes.description}</p></div>
                                <div className="flex gap-4 ">
                                    <div><button onClick={()=>{
                                        showTrailer()
                                        settrailerLink(movie.attributes.trailer_link)
                                        }} className="w-32 h-12 rounded-3xl text-lg bg-red-500">play trailer</button></div>
                                    <div><button className="w-32 h-12 rounded-3xl text-lg bg-red-500">buy ticket</button></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
