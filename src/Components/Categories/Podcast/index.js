import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import axios from "axios";
import "./style.css";
const Podcast = () => {
  const navigate = useNavigate();
  const [podcasts, setPodcast] = useState([]);
  const[id,setId]=useState(useParams().id)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/podcasts");

    setPodcast(item.data);
    console.log(podcasts);
  };

  // artist info
  const r = [];
  function info(name) {
    navigate(`/podcast/${name}/${id}`);
  }

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setPodcast(response.data.results);
    }
  };

  const home=()=>{
    navigate(`/${id}`);
}
const favor=()=>{
    navigate(`/favorite/${id}`);
}
  return (
    <>
    <div className="homeicon">
    <h1 onClick={home} className="icon">
      <AiFillHome />
    </h1>
    <h1 onClick={favor} className="icon">
      <GrFavorite />
    </h1>
    </div>
    <div className="container">
      <h1>Podcast</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      <div className='cards-sec'>

      {podcasts.map((pod) => {
        if (!r.includes(pod.trackName)) {
          r.push(pod.trackName);
          return (
            <div onClick={() => info(pod.trackName)} className="items">
              <img src={pod.artworkUrl100} />
              <h1>{pod.trackName}</h1>
            </div>
          );
        }
      })}
      </div>
    </div>
    </>
  );
};

export default Podcast;
