"use client";

import Playtrailer from "./components/Playtrailer";
import Slider from "./components/homepage/Slider";
import Nowshowing from "./components/homepage/Nowshowing";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
    const [trailerLink,settrailerLink] = useState("")
    const [play, setPlay] = useState(false);
    const [movieList,setmovieList] = useState([])
    const showTrailer = () => {
        setPlay(true);
    };
    const hideTrailer=()=>{
        setPlay(false)
    }
    const fetchMovie = async ()=>{
        try {
            const movie = await axios.get("https://moviesapi-mwp9.onrender.com/api/movies?populate=*")
            setmovieList(movie.data.data)
        } catch (error) {
            console.log("error")
            
        }
    }
    useEffect(()=>{
        fetchMovie()

    },[])
    return (
        <div className="bg-white">
            <Slider settrailerLink={settrailerLink} movieList={movieList} showTrailer={showTrailer} />
            <Nowshowing movieList ={movieList.filter((singleMovie)=>singleMovie.attributes.now_showing===true)} settrailerLink={settrailerLink} upcoming={false} showTrailer={showTrailer}  />
            <Nowshowing movieList ={movieList.filter((singleMovie)=>singleMovie.attributes.now_showing===false)}upcoming={true} settrailerLink={settrailerLink} showTrailer={showTrailer}  />
            <div className="fixed z-50 top-0 h-screen ">{play?<Playtrailer trailerLink={trailerLink} hideTrailer={hideTrailer}/>:null}</div>
        </div>
    );
}
