import React,{useEffect,useState, useTransition} from 'react'
import "./RowPost.css"
import axios from '../../axios'
import  {imageUrl,API_KEY} from '../../Constant/Constant'
import Youtube from 'react-youtube'

function RowPost(props) {
  const  [movies,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log('res',response);
      setMovie(response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
const handelmovie = (id)=>{
console.log('id',id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  console.log(response.data);
  if(response.data.results.length !==0){
    setUrlId(response.data.results[0])
  }else{
    console.log('array empty')
  }
})
}
  return (
    <div className='row'>
      <h2>{props.title} </h2>
       <div className="posters">
        {movies.map((obj)=>
             <img onClick={()=>handelmovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'}src = {`${imageUrl+obj.backdrop_path}`} alt="poster" />
         )}

      
       </div>
      { urlId && <Youtube opts = {opts} videoId = {urlId.key}/>} 

    </div>
  )
}

export default RowPost
