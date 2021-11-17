import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import axios from "axios";

import "./style.css";
const Ebooks = () => {
  let artistName = useParams().artistName;
  const [ebooks, setEbooks] = useState([]);

  const navigate = useNavigate();
  

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/ebooks");
    setEbooks(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(ebooks[0]);
  useEffect(() => {
    getData();
  }, []);

  const favorite=()=>{
    let usefav=JSON.parse(localStorage.getItem("activ"));
    let name =usefav.username;
    let fav=usefav.favorite;
    let x=0;
    fav.map(item=>{
      if(item[0].trackId==ebooks[0].trackId){
           x=1;
      }
    })
    if(x==0){
      fav.push(ebooks)
      let newUser={
        username: name,
        favorite: fav,
      };
      axios.post("http://localhost:5500/users/favorite",{username:name,favorite: ebooks})
      localStorage.setItem("activ",JSON.stringify(newUser));
    }
  }


  return (

    <div className="container">
      {ebooks.map((item) => {
        return (
          <div className="sid-container">
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} />
                <h2>{item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2> {item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Book page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}
      <h1>{ebooks.kind}</h1>
      <h1>{ebooks.country}</h1>
      <h1>{ebooks.trackName}</h1>
      <button onClick={favorite}>like</button>
    </div>

  );
};

export default Ebooks;

