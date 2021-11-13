import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
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

  return (
    <div className="container">
      <h1>Ebooks</h1>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search"
        type="text"
      />
      {ebooks.map((ebook) => {
        if (!r.includes(ebook.artistName)) {
          r.push(ebook.artistName);
          return (
            <div onClick={() => info(ebook.artistName)} className="books">
              <img src={ebook.artworkUrl100} />
              <h1>{ebook.artistName}</h1>

            </div>
          );
        }
      })}
    </div>
  );
};

export default Ebooks;
