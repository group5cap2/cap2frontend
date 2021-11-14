import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import axios from "axios";
import "./style.css";

const AudioBooks = () => {
  const navigate = useNavigate();
  const [audios, setAudios] = useState([]);
  const[id,setId]=useState(useParams().id)

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
  function info(name) {
    navigate(`/audiobooks/${name}/${id}`);
  }

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setAudios(response.data.results);
    }
  };

  const home=()=>{
    navigate(`/${id}`);
}
const favor=()=>{
    navigate(`/favorite/${id}`);
}

  return (
    <>
    <div className="homeicon">
    <h1 onClick={home} className="icon">
      <AiFillHome />
    </h1>
    <h1 onClick={favor} className="icon">
      <GrFavorite />
    </h1>
  </div>
    <div className="container">
      <h1>AudioBooks</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      <div className='cards-sec'>

      {audios.map((audio) => {
        if (!r.includes(audio.artistName)) {
          r.push(audio.artistName);
          return (
            <div onClick={() => info(audio.artistName)} className="items">
              <img src={audio.artworkUrl100} />
              <h1>{audio.artistName}</h1>
            </div>
          );
        }
      })}
      </div>
    </div>
    </>
  );
};

export default AudioBooks;
