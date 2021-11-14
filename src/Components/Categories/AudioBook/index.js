import React from "react";
import { useState, useEffect } from "react";

import { useParams,useNavigate } from "react-router";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import axios from "axios";
import "./style.css";
const Audiobook = () => {
  let artistName = useParams().artistName;
  const [audiobook, setAudiobook] = useState([]);
  const[id,setId]=useState(useParams().id)
  const navigate = useNavigate();
  

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/audiobooks");
    setAudiobook(item.data.filter((item) => artistName == item.artistName));
  };
  console.log(audiobook);

  useEffect(() => {
    getData();
  }, []);

  const favorite=()=>{
    if(id!=0){
      axios.post("http://localhost:5500/users/favorite", {username:id,favorite:audiobook})
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
      {audiobook.map((item) => {
        return (
          <div className="audio">
            <ul className="songs">
              <li className="song">
              <img src={item.artworkUrl100} />
                <h2>{item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2>{item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Audio page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}

      <h1>{audiobook.kind}</h1>
      <h1>{audiobook.country}</h1>
      <h1>{audiobook.trackName}</h1>
      <button onClick={favorite}>like</button>
    </div>
    </>
  );
};

export default Audiobook;
