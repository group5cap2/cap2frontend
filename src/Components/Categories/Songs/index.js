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
  const r = [];
  function info (name)  {
    // name.split("").join("")
    // console.log(name);
    // console.log(name);
    navigate(`/song/${name}`)
    // console.log("info function");
    // console.log(r);
    // console.log(r);
  };

 
  return (
    <div>
      {songs.map((song) => {
        if (!r.includes(song.artistName)) {
          r.push(song.artistName);
          return (
           <div onClick={() => info(song.artistName)}> <h1 >{song.artistName}</h1> </div>
          );
        }
      })}
    </div>
  );
};

export default Songs;
