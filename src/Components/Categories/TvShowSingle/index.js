import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import axios from "axios";

import "./style.css";
const TvShowSingle = () => {
  let artistName = useParams().artistName;
  const [tvShowSingle, setTvShowSingle] = useState([]);
 
  const navigate = useNavigate();

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/tvshows");
    setTvShowSingle(item.data.filter((item) => artistName == item.artistName));
  };
  useEffect(() => {
    getData();
  }, []);
console.log(tvShowSingle[0])
  const favorite=()=>{
    let usefav=JSON.parse(localStorage.getItem("activ"));
    let name =usefav.username;
    let fav=usefav.favorite;
    let x=0;
    fav.map(item=>{
      if(item[0].trackId==tvShowSingle[0].trackId){
           x=1;
      }
    })
    if(x==0){
      fav.push(tvShowSingle)
      let newUser={
        username: name,
        favorite: fav,
      };
      axios.post("http://localhost:5500/users/favorite",{username:name,favorite: tvShowSingle})
      localStorage.setItem("activ",JSON.stringify(newUser));
    }
  }


  return (

    <div className="container">
      {tvShowSingle.map((item) => {
        return (
          <div className="tvshow">
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
      <button onClick={favorite}>like</button>
    </div>

  );
};

export default TvShowSingle;
