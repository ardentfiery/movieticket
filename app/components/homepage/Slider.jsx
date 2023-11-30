"use client";
import React from "react";
import { useRef } from "react";
import styles from "./slider.module.css";

const Slider = () => {
    const sliderRef = useRef(null);
    const rightSlider = () => {
        console.log("kei aaaxa ki aaxiana");
        sliderRef.current.scrollBy(window.innerWidth, 0);
    };
    const leftSlider = () => {
        sliderRef.current.scrollBy(-window.innerWidth, 0);
    };
    const movieArray = [
        {
            genre: "action",
            name: "x-men",
            description: "this is a very nice movie ",
            img_name: "movie4.jpg",
        },

        {
            genre: "action",
            name: "spiderman",
            description: "this is a very nice movie ",
            img_name: "movie2.jpg",
        },

        {
            genre: "action",
            name: "ironman",
            description: "this is a very nice movie ",
            img_name: "movie3.jpg",
        },
    ];
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
                {movieArray.map((movie) => {
                    return (
                        <div
                            style={{
                                backgroundImage: `url(${movie.img_name})`,
                            }}
                            className={styles.imageholder}
                        >
                            <div className={styles.onemoviedetail}>
                                <div className="text-lg">{movie.genre}</div>
                                <div className="text-5xl"> {movie.name}</div>
                                <div className="text-lg">{movie.description}</div>
                                <div className="flex gap-4 ">
                                    <div><button className="w-32 h-12 rounded-3xl text-lg bg-red-500">play trailer</button></div>
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
