import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
const Ebooks = () => {
  let artistName = useParams().artistName;
  const [ebooks, setEbooks] = useState([]);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/ebooks");
    setEbooks(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(ebooks);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <div className="container"> */}
      {ebooks.map((item) => {
        return (
          <div className="container">
            <ul className="songs">
              <li className="song">
                <h2>{item.artistName} </h2>
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

      <h1>{ebooks.kind}</h1>
      <h1>{ebooks.country}</h1>
      <h1>{ebooks.trackName}</h1>
    </div>
  );
};

export default Ebooks;
