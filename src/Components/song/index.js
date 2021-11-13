import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
const Song = () => {
  let artistName = useParams().artistName;
  const [songs, setSongs] = useState([]);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/songs");
    setSongs(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(songs);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {songs.map((item) => {
        return (
          <div className="container">
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} />
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
    </div>
  );
};

export default Song;
