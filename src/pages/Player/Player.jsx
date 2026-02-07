import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}= useParams()
  const navigate = useNavigate();
  
  const [apiData, setApiData] = useState({
    name: "",
    key: "https://www.youtube.com/watch?v=ip8o5hDFLhI ",
    published_at: "",
    type: ""
  });
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWM3Mjc2NmQwNGE2YzE0NTdmMzdhOTEyOGRlOTYxZiIsIm5iZiI6MTc3MDM2MDAzNS42ODgsInN1YiI6IjY5ODU4Y2UzZGIxMTBhMWI0ODM0NTBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VJMWTU-FOivknicMssarB1aTZCiT5rWe7vYujAgQ9ng'
    } 
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}d/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err)); 
  }, []);

  return (
    <div className='player'>
      <img 
        src={back_arrow_icon} 
        alt="Back" 
        onClick={() => navigate(-1)}
      />
      <iframe 
        width='100%' 
        height='100%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"  
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>

      <div className="player-info">
        <p>Published: {apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player