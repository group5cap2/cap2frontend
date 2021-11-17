import React from "react";
import { useState, useEffect } from "react";

import { useParams,useNavigate } from "react-router";

import axios from "axios";
import "./style.css";
const Audiobook = () => {
  let artistName = useParams().artistName;
  const [audiobook, setAudiobook] = useState([]);


  const navigate = useNavigate();
  

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/audiobooks");
    setAudiobook(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(audiobook[0]);

  useEffect(() => {
    getData();
  }, []);

  const favorite=()=>{
    let usefav=JSON.parse(localStorage.getItem("activ"));
    let name =usefav.username;
    let fav=usefav.favorite;
    let x=0;
    fav.map(item=>{
      if(item[0].collectionId==audiobook[0].collectionId){
           x=1;
      }
    })
    if(x==0){
      fav.push(audiobook)
      let newUser={
        username: name,
        favorite: fav,
      };
      axios.post("http://localhost:5500/users/favorite",{username:name,favorite: audiobook})
      localStorage.setItem("activ",JSON.stringify(newUser));
    }
  }


  return (

    <div className="container">
      {audiobook.map((item) => {
        return (
          <div className="audio">
            <ul className="songs">
              <li className="song">
              <img src={item.artworkUrl100} />
                <h2>{item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2>{item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Audio page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}

      <h1>{audiobook.kind}</h1>
      <h1>{audiobook.country}</h1>
      <h1>{audiobook.trackName}</h1>
      <button onClick={favorite}>like</button>
    </div>

  );
};

export default Audiobook;

