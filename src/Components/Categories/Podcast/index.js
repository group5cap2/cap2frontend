import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css';
const Podcast = () => {
  const navigate = useNavigate();
  const [podcasts, setPodcast] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/podcasts");

    setPodcast(item.data);
    console.log(podcasts);
  };

  // artist info
  const r = [];
  function info (name)  {
   
    navigate(`/song/${name}`)
   
  };

 
  return (
    <div className="podcast-container">
      {podcasts.map((pod) => {
        if (!r.includes(pod.trackName)) {
          r.push(pod.trackName);
          return (
           <div onClick={() => info(pod.trackName)} className='podcast'> 
          <h1 >{pod.trackName}</h1> 
          
           </div>
          );
        }
      })}
    </div>
  );
}

export default Podcast
