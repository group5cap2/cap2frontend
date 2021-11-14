import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import axios from "axios";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import "./style.css";
const Song = () => {
  let artistName = useParams().artistName;
  const [songs, setSongs] = useState([]);
  // eslint-disable-next-line
  const[id,setId]=useState(useParams().id);
  const navigate = useNavigate();

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/songs");
    // eslint-disable-next-line
    setSongs(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(songs);
  useEffect(() => {
    getData();
  });

  const favorite=()=>{
    if(id!==0){
      axios.post("http://localhost:5500/users/favorite", {username:id,favorite:songs})
    }
  }

  const home=()=>{
    navigate(`/${id}`);
}
const favor=()=>{
    navigate(`/favorite/${id}`);
}

  return (
    <>
    <div className="homeicon">
    <h1 onClick={home} className="icon1">
      <AiFillHome />
    </h1>
    <h1 onClick={favor} className="icon2">
      <GrFavorite />
    </h1>
    </div>
    <div className="container">
      {songs.map((item) => {
        return (
          <div>
            <ul className="songs">
        
              <li className="song">
           
                <img src={item.artworkUrl100} alt="img" />
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
      <button onClick={favorite}>like</button>
    </div>
    </>
  );
};

export default Song;
