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
     
      navigate(`/audiobooks/${name}`)
     
    };
  
    const getSearched = async (e) => {
      if (e.key === "Enter") {
        let myTerm = e.target.value;
        const response = await axios.get(
          `http://localhost:5500/movies/search/${myTerm}`
        );
        setAudios(response.data.results);
      }
    };
    return (
      <div className="audio-container">
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
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
