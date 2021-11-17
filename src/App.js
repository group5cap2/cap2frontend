import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import First from "./components/First";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={<First/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
