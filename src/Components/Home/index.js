import React from "react";
// eslint-disable-next-line
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { GiMusicSpell, GiBlackBook } from "react-icons/gi";
import { IoTvSharp, IoBookSharp } from "react-icons/io5";

import {
  MdMusicVideo,
  MdOutlinePodcasts,
  MdOutlineMovieCreation,
} from "react-icons/md";
import { useState } from "react";
import back from "../imgs/turntable.png"
import "./style.css";

const Home = () => {
  // eslint-disable-next-line

  const navigate = useNavigate();

  const songs = () => {
    navigate(`/songs`);
  };
  const ebooks = () => {
    navigate(`/ebooks`);
  };
  const movies = () => {
    navigate(`/movies`);
  };
  const podcast = () => {
    navigate(`/podcast`);
  };
  const audiobooks = () => {
    navigate(`/audiobooks`);
  };
  const tvshow = () => {
    navigate(`/tvshow`);
  };
  const musicVideo = () => {
    navigate(`/musicVideo`);
  };

  const home = () => {
    navigate(`/`);
  };
  const favorite = () => {
    navigate(`/favorite`);
  };

  return (
    <div className="home-container">
      <img src={back} className='back'/>
      <h1 className="frontText">Categories</h1>

      <div onClick={songs} className="card">
        <GiMusicSpell />
        <h5>Songs</h5>
      </div>

      <div onClick={ebooks} className="card">
        <GiBlackBook />
        <h5>Ebooks</h5>
      </div>

      <div onClick={movies} className="card">
        <MdOutlineMovieCreation />
        <h5>Movies</h5>
      </div>

      <div onClick={podcast} className="card">
        <MdOutlinePodcasts />
        <h5>Podcast</h5>
      </div>
      <div onClick={audiobooks} className="card">
        <IoBookSharp />
        <h5>Audiobooks</h5>
      </div>
      <div onClick={tvshow} className="card">
        <IoTvSharp />
        <h5>Tvshow</h5>
      </div>
      <div onClick={musicVideo} className="card">
        <MdMusicVideo />
        <h5>MusicVideo</h5>
      </div>
    </div>
  );
};

export default Home;
