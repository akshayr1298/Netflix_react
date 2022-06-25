import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constant/Constant'

function Banner() {
  const [movie,setMovie] = useState({})

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[0])
    })
   

  },[])
  
  return (
    <div style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}} className='banner'>
        <div className='content'>
          <h3 className='title'>{movie.title} </h3>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>

          </div>
          <h2 className='discription'>{movie.overview} </h2>
        </div>
        <div className="fade_bottom">
          
        </div>
      
    </div>
  )
}

export default Banner
