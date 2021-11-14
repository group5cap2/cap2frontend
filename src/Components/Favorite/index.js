import React, { useState, useEffect } from "react";

// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import "./style.css";
const Favorite = () => {
  const [user, setUser] = useState(null);
  const [fav, setFav] = useState([]);

  const getuser = () => {
    let userLogged = JSON.parse(localStorage.getItem("activ"));
    if (userLogged) {
      setUser(userLogged);
      setFav(userLogged.favorite);
      console.log(fav)
    }
  };



  useEffect(() => {
    getuser();
  });

  return (
    <div className="container">
  
      {fav.map(item => {
            console.log(item)
            
      return (
          <>
      <div className="audio">
          <ul className="songs">
            <li className="song">
            <img src={item[0].artworkUrl100} />
              <h2>{item[0].artistName} </h2>
              <h2>{item[0].trackName} </h2>
              <h2>{item[0].collectionCensoredName} </h2>
              <a href={item[0].collectionViewUrl}> page</a>
              <p>{item[0].releaseDate}</p>
            </li>
          </ul>
        </div> 
      <h1>{item[0].kind}</h1>
          <h1>{item[0].country}</h1>
          <h1>{item[0].trackName}</h1>
           <button>like</button> 
       </> 
      );
    })}
    </div>
  );
};

export default Favorite;
