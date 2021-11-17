import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import axios from "axios";

import "./style.css";
const Movie = () => {
  let trackName = useParams().trackName;
  const [movie, setMovie] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/movies");
    setMovie(item.data.filter((item) => trackName == item.trackName));
    // console.log(item);
    console.log(movie);
  };
    console.log(movie[0]);
  useEffect(() => {
    getData();
  }, []);

  const favorite=()=>{
    let usefav=JSON.parse(localStorage.getItem("activ"));
    let name =usefav.username;
    let fav=usefav.favorite;
    let x=0;
    fav.map(item=>{
      if(item[0].trackId==movie[0].trackId){
           x=1;
      }
    })
    if(x==0){
      fav.push(movie)
      let newUser={
        username: name,
        favorite: fav,
      };
      axios.post("http://localhost:5500/users/favorite",{username:name,favorite: movie})
      localStorage.setItem("activ",JSON.stringify(newUser));
    }
  }



  return (

    <div className="container">
      {movie.map((item) => {
        return (
          <div className="sid-container">
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} />
                <h2> {item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2> {item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Movie page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}
      <h1>{movie.kind}</h1>
      <h1>{movie.country}</h1>
      <h1>{movie.trackName}</h1>
      <button onClick={favorite}>like</button>
    </div>
   
  );
};

export default Movie;

