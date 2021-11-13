import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css';

const AudioBooks = () => {
    const navigate = useNavigate();
    const [audios, setAudios] = useState([]);
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const item = await axios.get("http://localhost:5500/audiobooks");
  
      setAudios(item.data);
      console.log(audios);
    };
  
    // artist info
    const r = [];
    function info (name)  {
     
      navigate(`/song/${name}`)
     
    };
  
   
    return (
      <div className="audio-container">
        {audios.map((audio) => {
          if (!r.includes(audio.artistName)) {
            r.push(audio.artistName);
            return (
             <div onClick={() => info(audio.artistName)} className='audios'> 
            <h1 >{audio.artistName}</h1> 
            
             </div>
            );
          }
        })}
      </div>
    );
}

export default AudioBooks
