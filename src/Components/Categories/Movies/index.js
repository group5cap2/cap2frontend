import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import "./style.css";
const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const[id,setId]=useState(useParams().id)

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
    navigate(`/movies/${name}/${id}`);
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
      <h1>Movies</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      <div className='cards-sec'>

      {movies.map((movie) => {
        if (!r.includes(movie.trackName)) {
          r.push(movie.trackName);
          return (
            <div onClick={() => info(movie.trackName)}>
              <img src={movie.artworkUrl100} />
              <h1>{movie.trackName}</h1>
            </div>
          );
        }
      })}
      </div>
    </div>
    </>
  );
};

export default Movies;
