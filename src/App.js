import React, { useState, useEffect } from "react";
import "./App.css";
import SchedulingAlgo from "./Pages/SchedulingAlgo.jsx";
import FCFSNew from "./Pages/FCFSNew.jsx";
import "./Css/Homepage.css";
import Peterson from "./Pages/Peterson";
import OptPR from "./Pages/OptPR";
import FinalHomePage from "./Pages/FinalHomePage";
import ChatBot from "./Pages/ChatBot.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SchedulingAlgo" element={<SchedulingAlgo />} />
          <Route path="/peterson" element={<Peterson />} />
          <Route path="/firstcomefirstserve" element={<FCFSNew />} />
          <Route path="/OptPR" element={<OptPR />} />
          <Route path="/" element={<FinalHomePage />} />
          <Route path="/chat" element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
