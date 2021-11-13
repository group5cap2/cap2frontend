import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
const MusicVideo = () => {
  const navigate = useNavigate();
  const [musicVid, setMusicVid] = useState([]);

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
    navigate(`/musicVideo/${trackName}`);
  }

  return (
    <div className="music-container">
      {musicVid.map((music) => {
        if (!r.includes(music.trackName)) {
          r.push(music.trackName);
          return (
            <div onClick={() => info(music.trackName)} className="musics">
              <h1>{music.trackName}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MusicVideo;
