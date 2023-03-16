import React, { useState } from "react";
import '../Css/Peterson.css';
import Ball from './Ball.jsx';


const Peterson = () => {
  const [ball1Pos, setBall1Pos] = useState({ top: 50, left: 50 });
  const [ball2Pos, setBall2Pos] = useState({ top: 100, left: 100 });
  const [ball1InSection, setBall1InSection] = useState(false);
  const [ball2InSection, setBall2InSection] = useState(false);


  const handleSimulate = () => {
    const screenWidth = window.innerWidth;
    const ball1NewPos = { top: 50, left: screenWidth * 0.7 };
    const ball2NewPos = { top: 100, left: screenWidth * 0.7 };
    setBall1Pos(ball1NewPos);
    setBall2Pos(ball2NewPos);
  };

  const handleApplyAlgorithm = () => {
    const ballNumber = Math.floor(Math.random() * 10);
    const screenWidth = window.innerWidth;

    console.log(ballNumber);
    if(ball1InSection & ball2InSection){
        alert("One process is already in critical section");
    }
   else if (5 > ballNumber > 0) {
      const ball1NewPos = { top: 50, left: screenWidth - 50 };
      setBall1Pos(ball1NewPos);
    } else {
      const ball2NewPos = { top: 100, left: screenWidth - 50 };
      setBall2Pos(ball2NewPos);
    }
  };

  const handleApplyAlgorithms = (ballNumber) => {
    const screenWidth = window.innerWidth;
    if (ballNumber === 1) {
      if (ball1Pos.left > screenWidth * 0.7) {
        alert("One process is already in critical section");
        return;
      }
      const ball1NewPos = { top: 50, left: screenWidth - 50 };
      setBall1Pos(ball1NewPos);
      setBall1InSection(true);
    } else if (ballNumber === 2) {
      if (ball2Pos.left > screenWidth * 0.7) {
        alert("One process is already in critical section");
        return;
      }
      const ball2NewPos = { top: 100, left: screenWidth - 50 };
      setBall2Pos(ball2NewPos);
      setBall2InSection(true);
    }
  };

  
  return (
    <>
      Check text
      <div>
        <button onClick={() => handleApplyAlgorithms(1)} disabled={ball1InSection ? ball1InSection : ball2InSection}>
          <Ball top={ball1Pos.top} left={ball1Pos.left} />
        </button>
        <button onClick={() => handleApplyAlgorithms(2)} disabled={ball1InSection ? ball1InSection : ball2InSection}>
          <Ball top={ball2Pos.top} left={ball2Pos.left} />
        </button>
        <button onClick={handleSimulate}>Simulate</button>
        <button onClick={handleApplyAlgorithm} disabled={ball1InSection ? ball1InSection : ball2InSection}>Apply Algorithm</button>
              </div>
      <div className="critical-section">
        <p>Critical Sectino</p>
      </div>
    </>
  );
};

export default Peterson;
