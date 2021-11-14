import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import axios from "axios";
import "./style.css";
const MusicVideo = () => {
  const navigate = useNavigate();
  const [musicVid, setMusicVid] = useState([]);
  const[id,setId]=useState(useParams().id)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/musicvideo");

    setMusicVid(item.data);
    // console.log(musicVid);
  };

  // artist info
  const r = [];
  function info(trackName) {
    navigate(`/musicVideo/${trackName}/${id}`);
  }

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setMusicVid(response.data.results);
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
    <h1 onClick={home} className="icon1">
      <AiFillHome />
    </h1>
    <h1 onClick={favor} className="icon2">
      <GrFavorite />
    </h1>
    </div>
    <div className="container">
      <h1>Music Video</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      <div className='cards-sec'>

      {musicVid.map((music) => {
        if (!r.includes(music.trackName)) {
          r.push(music.trackName);
          return (
            <div onClick={() => info(music.trackName)} className="items">
              <img src={music.artworkUrl100} />
              <h1>{music.trackName}</h1>


            </div>
          );
        }
      })}
      </div>
    </div>
    </>
  );
};

export default MusicVideo;
