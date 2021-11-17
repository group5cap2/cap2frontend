import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const favorite = (i) => {
    let name = user.username;
    let id = i;
    axios.delete("http://localhost:5500/users/favorite", {
      username: name,
      id: id
    });
    user.favorite.splice(i,1);
    localStorage.setItem("activ", JSON.stringify(user));
  };

  return (
    <div className="container">
  
      {fav.map((item,i) => {
            console.log(item)
            
      return (
          <>
      <div className="audio" key={i}>
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
           <button onClick={()=>favorite(i)}>delete</button> 
       </> 
      );
    })}
    </div>
  );
};

export default Favorite;

