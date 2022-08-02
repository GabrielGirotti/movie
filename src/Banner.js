import React, { useState, useEffect } from "react";
import axios from "./axios.js";
import requests from "./requests.js";
import './Banner.css';

function Banner() {

   const [movie, setMovie] = useState([]);
   const style = {
      backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      //opacity:0.4,
   };

   useEffect(() => {
      async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         console.log("Banner", request.data.results);
         setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length)
            ]
         );
      }
      fetchData();
   }, []);

   
   function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
      
   }

   return (
      <header className="banner" style={style}>
        
          <div className="banner__contents" >
            <h1 className="banner__title">
               <div className="banner__title-shadow">{movie?.title || movie?.name || movie?.original_name}</div>
            </h1>
            <div className="banner__buttons">
               <button className="banner__button">Play</button>
               <button className="banner__button">My List </button>
            </div>
            <h1 className="banner__description">


            
              
            <div className="banner__description-shadow">{truncate(movie?.overview, 150)}</div>

            </h1>
            </div>
         
      </header>
   );
}
export default Banner;