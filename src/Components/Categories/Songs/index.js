import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import "./style.css";
const Songs = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const[id,setId]=useState(useParams().id)

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
  function info(name) {
    navigate(`/song/${name}/${id}`);
  }

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setSongs(response.data.results);
    }
  };

  return (
    <div className="container">
      <h1>Songs</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />

      {songs.map((song) => {
        if (!r.includes(song.artistName)) {
          r.push(song.artistName);
          return (
            
              <div onClick={() => info(song.artistName)}>
                <img src={song.artworkUrl100} />
                <h1>{song.artistName}</h1>
              </div>
          );
        }
      })}
    </div>
  );
};

export default Songs;
