import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";
const PodCastSingle = () => {
  let trackName = useParams().trackName;
  const [podCastSingle, setPodCastSingle] = useState([]);
  const[id,setId]=useState(useParams().id)


  const getData = async () => {
    const item = await axios.get("http://localhost:5500/podcasts");
    setPodCastSingle(item.data.filter((item) => trackName == item.trackName));
  };
  console.log(podCastSingle);
  useEffect(() => {
    getData();
  }, []);

  const favorite=()=>{
    if(id!=0){
      axios.post("http://localhost:5500/users/favorite", {username:id,favorite:podCastSingle})
    }
  }

  return (
    <div className="container">
      {podCastSingle.map((item) => {
        return (
          <div className="podcast">
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} />
                <h2> {item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2> {item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Music page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}

      <h1>{podCastSingle.kind}</h1>
      <h1>{podCastSingle.country}</h1>
      <h1>{podCastSingle.trackName}</h1>
      <button onClick={favorite}>like</button>
    </div>
  );
};

export default PodCastSingle;
