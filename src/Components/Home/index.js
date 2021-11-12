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
      <Link to="songs" className="songs card">
        <GiMusicSpell />
      </Link>
      
      <Link to="ebooks" className="songs card">
        <GiBlackBook />
      </Link>
      
      <Link to="movies" className="songs card">
        <MdOutlineVideoLibrary />
      </Link>
      
      <Link to="podcast" className="songs card">
        <MdOutlinePodcasts />
      </Link>
      
    
    </div>
  );
};

export default Home;
