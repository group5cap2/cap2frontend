import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

import "./style.css";
const Song = () => {
  let artistName = useParams().artistName;
  const [songs, setSongs] = useState([]);
  // eslint-disable-next-line

  const navigate = useNavigate();

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/songs");
    // eslint-disable-next-line
    setSongs(item.data.filter((item) => artistName == item.artistName));
  };
 
  useEffect(() => {
    getData();
  });

  
  const favorite=()=>{
    let usefav=JSON.parse(localStorage.getItem("activ"));
    let name =usefav.username;
    let fav=usefav.favorite;
    let x=0;
    fav.map(item=>{
      if(item[0].trackId==songs[0].trackId){
           x=1;
      }
    })
    if(x==0){
      fav.push(songs)
      let newUser={
        username: name,
        favorite: fav,
      };
      axios.post("http://localhost:5500/users/favorite",{username:name,favorite: songs})
      localStorage.setItem("activ",JSON.stringify(newUser));
    }
  }

  return (
    <div className="container">
      {songs.map((item) => {
        return (
          <div>
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} alt="img" />
                <h2>artist :{item.artistName} </h2>
                <h2>Song :{item.trackName} </h2>
                <h2>Album : {item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Music page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}
      <h1>{songs.kind}</h1>
      <h1>{songs.country}</h1>
      <h1>{songs.trackName}</h1>
      <button onClick={favorite}>like</button>
    
    </div>
  );
};

export default Song;
