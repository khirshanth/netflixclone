import React,{useState,useEffect}from "react";
import axios from "./axios";
import request from "./request";
import "./banner.css"

function Banner(){

   const[movie,setMovie]=useState([])

   useEffect(() => {
        async function fetchData(){
           const requests = await axios.get(request.fetchHorrorMovies)
           setMovie(requests.data.results
            [
                Math.floor(Math.random() * requests.data.results.length-1)
            ])
               
            
           return requests;
          
       }
       fetchData()
   },[])
         console.log(movie)

    return(
        <header
        className="banner"
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition:"center",
        
        }}>
           <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div >
                 <button className="banner-buttons">play</button>
                 <button className="banner-buttons">My List</button>
           </div>
            <h1 className="banner-des">
                {movie?.overview}
            </h1>
           
            <div
                
             class="banner--fadeBottom"></div>
           </div>
          
          
        </header>
    )
}



export default Banner