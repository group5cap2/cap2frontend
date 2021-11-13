import React from "react";
import axios from "axios";
import { Router, Link } from "react-router-dom";
import { GiMusicSpell, GiBlackBook } from "react-icons/gi";
import { IoTvSharp, IoBookSharp } from "react-icons/io5";
import { MdMusicVideo, MdOutlinePodcasts, MdOutlineMovieCreation } from "react-icons/md";
import { useState, useEffect } from "react";



import "./style.css";

const Home = () => {
 
  return (

    <div className="home-container">
      <Link to="songs" className="card">

        <GiMusicSpell />
        <h5>Songs</h5>
      </Link>
      
      <Link to="ebooks" className="card">
        <GiBlackBook />
        <h5>Ebooks</h5>
      </Link>
      
      <Link to="movies" className="card">
        <MdOutlineMovieCreation />
        <h5>Movies</h5>
      </Link>
      
      <Link to="podcast" className="card">
        <MdOutlinePodcasts />
        <h5>Podcast</h5>
      </Link>
      <Link to="audiobooks" className="card">
        <IoBookSharp />
        <h5>Audiobooks</h5>
      </Link>
      <Link to="tvshow" className="card">
        <IoTvSharp />
        <h5>Tvshow</h5>
      </Link>
      <Link to="musicVideo" className="card">
        <MdMusicVideo />
        <h5>MusicVideo</h5>
      </Link>
      
    
    </div>
  );
};

export default Home;
