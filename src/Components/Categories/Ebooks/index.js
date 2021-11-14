import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHome} from 'react-icons/ai';
import {GrFavorite} from 'react-icons/gr';
import "./style.css";

const Ebooks = () => {
  const navigate = useNavigate();
  const [ebooks, setEbooks] = useState([]);
  const[id,setId]=useState(useParams().id)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const item = await axios.get("http://localhost:5500/ebooks");

    setEbooks(item.data);
    console.log(ebooks);
  };

  // artist info
  const r = [];
  function info(name) {
    navigate(`/ebooks/${name}/${id}`);
  }

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5500/movies/search/${myTerm}`
      );
      setEbooks(response.data.results);
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
      <h1>Ebooks</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      <div className='cards-sec'>

      {ebooks.map((ebook) => {
        if (!r.includes(ebook.artistName)) {
          r.push(ebook.artistName);
          return (
            <div onClick={() => info(ebook.artistName)} className="items">
              <img src={ebook.artworkUrl100} />
              <h1>{ebook.artistName}</h1>

            </div>
          );
        }
      })}
      </div>
    </div>
    </>
  );
};

export default Ebooks;
