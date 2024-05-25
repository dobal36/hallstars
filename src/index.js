import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Player from "./team/Player";
import Pitcher from "./team/Pitcher";
import Batter from "./team/Batter";
import Bench from "./team/Bench";
import Manager from "./allstars/Manager";
import Allstars from "./allstars/Allstars";
import Grade from "./allstars/Grade";
import Photo from "./photo/Photo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/player" element={<Player />} />
      <Route path="/pitcher" element={<Pitcher />} />
      <Route path="/batter" element={<Batter />} />
      <Route path="/bench" element={<Bench />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="/allstars" element={<Allstars />} />
      <Route path="/grade" element={<Grade />} />
      <Route path="/photo" element={<Photo />} />
    </Routes>
  </BrowserRouter>
);
