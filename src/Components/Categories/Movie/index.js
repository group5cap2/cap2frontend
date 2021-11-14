import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import axios from "axios";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import "./style.css";
const Movie = () => {
  let trackName = useParams().trackName;
  const [movie, setMovie] = useState([]);
  const[id,setId]=useState(useParams().id)
  const navigate = useNavigate();

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/movies");
    setMovie(item.data.filter((item) => trackName == item.trackName));
    // console.log(item);
    console.log(movie);
  };
  //   console.log(movie);
  useEffect(() => {
    getData();
  }, []);

  const favorite=()=>{
    if(id!=0){
      axios.post("http://localhost:5500/users/favorite", {username:id,favorite:movie})
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
    <h1 onClick={home} className="icon">
      <AiFillHome />
    </h1>
    <h1 onClick={favor} className="icon">
      <GrFavorite />
    </h1>
  </div>
    <div className="container">
      {movie.map((item) => {
        return (
          <div className="sid-container">
            <ul className="songs">
              <li className="song">
                <img src={item.artworkUrl100} />
                <h2> {item.artistName} </h2>
                <h2>{item.trackName} </h2>
                <h2> {item.collectionCensoredName} </h2>
                <a href={item.collectionViewUrl}>Movie page</a>
                <p>{item.releaseDate}</p>
              </li>
            </ul>
          </div>
        );
      })}
      <h1>{movie.kind}</h1>
      <h1>{movie.country}</h1>
      <h1>{movie.trackName}</h1>
      <button onClick={favorite}>like</button>
    </div>
    </>
  );
};

export default Movie;
