import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
const MusicVid = () => {
  let trackName = useParams().trackName;
  //   console.log("artistName == "+artistName);
  const [musicVid, setMusicVid] = useState([]);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/musicVideo");
    setMusicVid(item.data.filter((item) => trackName == item.trackName));
    console.log("item =" + item);
    console.log(musicVid);
  };
  console.log(musicVid);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Music Video</h1>
      {musicVid.map((item) => {
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
      <h1>{musicVid.kind}</h1>
      <h1>{musicVid.country}</h1>
      <h1>{musicVid.trackName}</h1>
    </div>
  );
};

export default MusicVid;
