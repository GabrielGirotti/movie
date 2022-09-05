import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';




function Detail() {

    let token = localStorage.getItem('token');

    const [ movieDetalle, setMovieDetalle ] = useState(null)

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID');

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=13c4c099c2a4fa84d3854cba853923b8&language=es-ES`
        axios.get(endPoint)
            .then(response =>{
                const movieData = response.data;
                //console.log(movieData)
                setMovieDetalle(movieData)
            })
            
    }, [setMovieDetalle]);

  return (
    <>

    { !token && <Navigate to='/' /> }



    { !movieDetalle && 
        <>
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                
            </div>
            
        </div>
        <span className="sr-only" >Loading...</span>
        </>
    }

    {
        movieDetalle &&
        <>
            
                    

            <div className='detalle__contenedor'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieDetalle.poster_path}`} alt={movieDetalle.title} className='detalle__poster'/>
                    <div className='detalle__desc'>
                        <h3>{movieDetalle.title}</h3>
                        
                        <h5>Calificacion: {movieDetalle.vote_average}</h5>
                        <br />
                        <h5>Descripcion:</h5>
                        <p>{movieDetalle.overview}</p>
                        
                        <h5>Genero:</h5>
                        <p>{ movieDetalle.genres.map(oneG => <li key={oneG.id}>{oneG.name}</li>)}</p>
                    </div>

            </div>
                
              
           

            </>
          
       
    }

    </>
  )
}

export default Detail;