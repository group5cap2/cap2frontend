import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";
const TvShow = () => {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);
  // eslint-disable-next-line


  useEffect(() => {
    getData();
  });

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
        `http://localhost:5500/tvshows/search/${myTerm}`
      );
      setShows(response.data.results);
    }
  };



  return (

    <div className="container">
      <h1>TvShow</h1>
     
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"/>
      <div className='cards-sec'>

      {shows.map((show) => {
        if (!r.includes(show.artistName)) {
          r.push(show.artistName);
          return (
            <div onClick={() => info(show.artistName)} className="items">
              <img src={show.artworkUrl100} />
              <h1>{show.artistName}</h1>
            </div>
          );
        }
      })}
      </div>
    </div>

  );
};

export default TvShow;

