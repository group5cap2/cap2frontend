import React, { useState } from "react";
import { Route, Routes } from "react-router";
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
import User from "./Components/User/Account";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/home/:id" element={<Home />} />
        <Route exact path="/audiobooks/:id" element={<AudioBooks />} />
        <Route exact path="/ebooks/:id" element={<Ebooks />} />
        <Route exact path="/movies/:id" element={<Movies />} />
        <Route exact path="/musicVideo/:id" element={<MusicVideo />} />
        <Route exact path="/podcast/:id" element={<Podcast />} />
        <Route exact path="/songs/:id" element={<Songs />} />
        <Route exact path="/tvshow/:id" element={<Tvshow />} />
        {/* <Route exact path="/discription" element={<Discription  />} /> */}
        <Route path="/account/:id" element={<Account />} />
        <Route path="/favorite/:id" element={<Favorite />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
