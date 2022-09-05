import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './results.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';




function Results() {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');


    const [ results, setResults ] = useState([]);

    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(()=>{
      const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=13c4c099c2a4fa84d3854cba853923b8&language=es-US&page=1&include_adult=false&query=${keyword}`
      //console.log(endPoint)
      axios.get(endPoint)
          .then(response =>{
              const movieResults = response.data.results;
              
              
              setResults(movieResults)
          })
        
  }, [results]);

  //console.log(results)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
};

const handleClick = (movie) =>{
    if (trailerUrl){
        setTrailerUrl('');            
    }else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || '') 
        .then(url =>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error))
    }
}
  

  return (
    <> 



    <h5 className='search__title'>Movies with keyword: <em><b>{keyword}</b></em></h5>
    <div className='row__posters'>
       
      {
        results.map((el, i) =>{
          return (
            <div key={i}>
            <div className="row__posters results__posters-xtra">
              <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} className="row__posterLarge" alt={el.title}  />
              
            </div>
            <div className="search__detalle">
                <h5 className="search__detalle-titulo">{el.title.substring(0, 23)}...</h5>
                
                <button className="results__btn" onClick={()=> handleClick(el)}>View trailer</button>
              </div>
              
            </div>
          )
        })
      }   
       
    </div>
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}  
</>   
    
  )
}

export default Results;