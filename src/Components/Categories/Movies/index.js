import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/movies");

    setMovies(item.data);
    console.log(movies);
  };

  // movies info
  const r = [];
  function info(name) {
    navigate(`/movies/${name}`);
  }
  
  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setMovies(response.data.results);
    }
  };
  return (
    <div>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      {movies.map((movie) => {
        if (!r.includes(movie.trackName)) {
          r.push(movie.trackName);
          return (
            <div onClick={() => info(movie.trackName)}>
              <h1>{movie.trackName}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Movies;
