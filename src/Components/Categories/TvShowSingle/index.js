import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
const TvShowSingle = () => {
  let artistName = useParams().artistName;
  const [tvShowSingle, setTvShowSingle] = useState([]);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/tvshows");
    setTvShowSingle(item.data.filter((item) => artistName == item.artistName));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {tvShowSingle.map((item) => {
        return (
          <div className="container">
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} />
                <h2>{item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2>{item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Episode page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}
      <h1>{tvShowSingle.kind}</h1>
      <h1>{tvShowSingle.country}</h1>
      <h1>{tvShowSingle.trackName}</h1>
    </div>
  );
};

export default TvShowSingle;
