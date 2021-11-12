import React from "react";
import axios from "axios";
import { Router, Link } from "react-router-dom";
import { GiMusicSpell, GiBlackBook } from "react-icons/gi";
import { MdOutlineVideoLibrary, MdOutlinePodcasts } from "react-icons/md";
import { useState, useEffect } from "react";

import "./style.css";

const Home = () => {
  return (
    <div className="contaner">
      <Link to="songs" className="card1 card">
        <GiMusicSpell />
      </Link>
      <div className="card2 card">{/* <h1>EBooks</h1> */}</div>
      <div className="card3 card">{/* <h1>Movies</h1> */}</div>
      <div className="card4 card">
        <h1>Music Video</h1>
      </div>
      <div className="card5 card">
        <h1>Podcast</h1>
      </div>
      <div className="card6 card">{/* <h1>Music</h1> */}</div>
      <div className="card7 card">
        <h1>TV Show</h1>
      </div>
    </div>
  );
};

export default Home;
