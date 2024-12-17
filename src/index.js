import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Player2024 from "./team/Player2024";
import Player2025 from "./team/Player2025";
import Pitcher2024 from "./team/Pitcher2024";
import Pitcher2025 from "./team/Pitcher2025";
import Batter2024 from "./team/Batter2024";
import Batter2025 from "./team/Batter2025";
import Bench from "./team/Bench";
import Manager from "./allstars/Manager";
import Allstars from "./allstars/Allstars";
import Grade from "./allstars/Grade";
import Award from "./award/Award";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/player2024" element={<Player2024 />} />
      <Route path="/player2025" element={<Player2025 />} />
      <Route path="/pitcher2024" element={<Pitcher2024 />} />
      <Route path="/pitcher2025" element={<Pitcher2025 />} />
      <Route path="/batter2024" element={<Batter2024 />} />
      <Route path="/batter2025" element={<Batter2025 />} />
      <Route path="/bench" element={<Bench />} />
      <Route path="/manager" element={<Manager />} />
      <Route path="/allstars" element={<Allstars />} />
      <Route path="/grade" element={<Grade />} />
      <Route path="/award" element={<Award />} />
    </Routes>
  </BrowserRouter>
);
