import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Songs = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/songs");

    setSongs(item.data);
    console.log(songs);
  };

  // artist info

  const info = (name) => {
    // navigate(`name?artistName=${name}`)
    console.log(name);
  };

  const r = [];
  return (
    <div>
      {songs.map((song) => {
        if (!r.includes(song.artistName)) {
          r.push(song.artistName);
          return (
            <button onClick={info(song.artistName)}>{song.artistName}</button>
          );
        }
      })}
    </div>
  );
};

export default Songs;
