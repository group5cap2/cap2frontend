import React from "react";
import { useState, useEffect } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
// import { IoMdRocket } from "react-icons/io";
const Audiobook = () => {
  let artistName = useParams().artistName;
  const [audiobook, setAudiobook] = useState([]);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/audiobooks");
    setAudiobook(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(audiobook);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <div className="container"> */}
      {audiobook.map((item) => {
        return (
          <div className="container">
            <ul className="songs">
              <li className="song">
                <h2>{item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2>{item.collectionCensoredName} </h2>
                <img src={item.artworkUrl100} />
                <a href={item.collectionViewUrl}>Music page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}

      <h1>{audiobook.kind}</h1>
      <h1>{audiobook.country}</h1>
      <h1>{audiobook.trackName}</h1>
    </div>
  );
};

export default Audiobook;
