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
  console.log(audiobook);

  useEffect(() => {
    getData();
  }, []);

  // const favorite=()=>{
  //   // {}
  //   //   axios.post("http://localhost:5500/users/favorite", {username:id,favorite:audiobook})
  //   // }
  // }


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
      <button>like</button>
    </div>

  );
};

export default Audiobook;
