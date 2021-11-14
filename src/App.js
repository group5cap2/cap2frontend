import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import AudioBooks from "./Components/Categories/AudioBooks";
import Ebooks from "./Components/Categories/Ebooks";
import Movies from "./Components/Categories/Movies";
import MusicVideo from "./Components/Categories/MusicVideo";
import Podcast from "./Components/Categories/Podcast";
import Songs from "./Components/Categories/Songs";
import Tvshow from "./Components/Categories/Tvshow";
import Favorite from "./Components/Favorite";
import Header from "./Components/Header";
import Account from "./Components/Account";
import Audiobook from "./Components/Categories/AudioBook";
import Ebook from "./Components/Categories/Ebook";
import Song from "./Components/song";
import MusicVid from "./Components/Categories/MusicVid";
import PodCastSingle from "./Components/Categories/PodCastSingle";
import TvShowSingle from "./Components/Categories/TvShowSingle";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Movie from "./Components/Categories/Movie";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/audiobooks" element={<AudioBooks />} />
          <Route exact path="/ebooks" element={<Ebooks />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/musicVideo" element={<MusicVideo />} />
          <Route exact path="/podcast" element={<Podcast />} />
          <Route exact path="/songs" element={<Songs />} />
          <Route exact path="/tvshow" element={<Tvshow />} />
          <Route exact path="/song/:artistName" element={<Song />} />
          <Route exact path="/audiobooks/:artistName" element={<Audiobook />} />
          <Route exact path="/ebooks/:artistName" element={<Ebook />} />
          <Route exact path="/movies/:trackName" element={<Movie />} />
          <Route exact path="/musicVideo/:trackName" element={<MusicVid />} />
          <Route exact path="/podcast/:trackName" element={<PodCastSingle />} />
          <Route exact path="/tvshows/:artistName" element={<TvShowSingle />} />

          <Route path="/account" element={<Account />} />
          <Route path="/favorite" element={<Favorite />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
