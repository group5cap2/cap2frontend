import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
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
  return (
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
  );
};

export default Podcast;
