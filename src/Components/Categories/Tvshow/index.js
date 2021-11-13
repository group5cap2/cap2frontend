import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
const TvShow = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/tvshows");

    setShows(item.data);
    console.log(shows);
  };

  // artist info
  const r = [];
  function info(name) {
    navigate(`/tvshows/${name}`);
  }

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setShows(response.data.results);
    }
  };
  return (
    <div className="tvShow-container">
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      {shows.map((show) => {
        if (!r.includes(show.artistName)) {
          r.push(show.artistName);
          return (
            <div onClick={() => info(show.artistName)} className="show">
              <img src={show.artworkUrl100} />
              <h1>{show.artistName}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TvShow;
