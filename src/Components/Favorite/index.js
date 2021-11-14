import React,{useState,useEffect} from 'react'
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './style.css';
const Favorite = () => {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState(useParams().id);
    const [user,setUser] = useState([]);
  const navigate = useNavigate();

  const getAllusers = async () => {
    const user = await axios.get("http://localhost:5500/users");
    setUsers(user.data);
  };

  const getuser = async () => {
      users.map(item=>{
          if(item.username==id)
          {
              setUser(item)
          }
      })
  }

  const home=()=>{
    navigate(`/${id}`);
}
const favorite=()=>{
    navigate(`/favorite/${id}`); 
}
useEffect(() => {
    getAllusers();
    getuser();
  }, []);
  
  console.log(user.favorite[0]);

    return (
        <>
            <div className="homeicon">
        <h1 onClick={home} className="icon">
          <AiFillHome />
        </h1>
        <h1 onClick={favorite} className="icon">
          <GrFavorite />
        </h1>
        </div>
      
      {/* <div className="container">
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
    </div> */}
    </>
            
        
    )
}

export default Favorite;
