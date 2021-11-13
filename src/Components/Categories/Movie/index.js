import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
const Movie = () => {
  let trackName = useParams().trackName;
  const [movie, setMovie] = useState([]);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/movies");
    setMovie(item.data.filter((item) => trackName == item.trackName));
    // console.log(item);
    console.log(movie);
  };
  //   console.log(movie);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1> movie </h1>
      {movie.map((item) => {
        return (
          <div className="container">
            <ul className="songs">
              <li className="song">
                <h2> {item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2> {item.collectionCensoredName} </h2>
                <img src={item.artworkUrl100} />
                <a href={item.collectionViewUrl}>Music page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}
      <h1>{movie.kind}</h1>
      <h1>{movie.country}</h1>
      <h1>{movie.trackName}</h1>
    </div>
  );
};

export default Movie;
