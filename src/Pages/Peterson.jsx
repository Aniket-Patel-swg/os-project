import React, { useState } from "react";
import "../Css/Peterson.css";
import Ball from "./Ball.jsx";

const Peterson = () => {
  let [ball1Pos, setBall1Pos] = useState({ top: 50, left: 50, text:"P1" });
  let [ball2Pos, setBall2Pos] = useState({ top: 100, left: 50, text:"P2" });
  const [ball1InSection, setBall1InSection] = useState(false);
  const [ball2InSection, setBall2InSection] = useState(false);
  const [simulateButtonClicked, setSimulateButtonClicked] = useState(false);

  const handleSimulate = () => {
    const screenWidth = window.innerWidth;
    let ball1NewPos = { top: 50, left: screenWidth * 0.5 };
    let ball2NewPos = { top: 100, left: screenWidth * 0.5 };
    setBall1Pos(ball1NewPos);
    setBall2Pos(ball2NewPos);
    setSimulateButtonClicked(true);
  };

  const handleApplyAlgorithms = (ballNumber) => {
    const screenWidth = window.innerWidth;
    console.log("handle apply algorithm is clicked");
    if (ball1InSection || ball2InSection)  {
      console.log("one process is already in critical section");
      alert("One process is already in critical section");
      return;
    }
    if (ballNumber === 1) {
      console.log("ball 1 is in critical section");
      if (screenWidth*0.6> ball1Pos.left > screenWidth * 0.3) {
        alert("One process is already in critical section");
        return;
      }
      else if(ball1Pos.left=screenWidth*0.3){
        let ball1NewPos = { top: 50, left: screenWidth*0.6};
        setBall1Pos(ball1NewPos);
        setBall1InSection(true);
      }
      else if(ball1Pos.left=screenWidth*0.6){
        let ball1NewPos = { top: 50, left: screenWidth*0.9};
        setBall1Pos(ball1NewPos);
        setBall1InSection(false);
      }
    } else if (ballNumber === 2) {
      console.log("ball 2 is in critical section");
      let ball2NewPos = { top: 100, left: screenWidth * 0.65 };
      setBall2Pos(ball2NewPos);
      setBall2InSection(true);
    }
  };

  const handleExitCriticalSection = () => {
    const screenWidth = window.innerWidth;
    console.log("Exit Critical Section button clicked");
    if (ball1InSection) {
      console.log("ball 1 is getting out of critical section");
      let ball1NewPos = { top: 50, left: screenWidth * 0.8 };
      setBall1Pos(ball1NewPos);
      setBall1InSection(false);
    } else if (ball2InSection) {
      console.log("ball 2 is getting out of critical section");
      let ball2NewPos = { top: 100, left: screenWidth * 0.8 };
      setBall2Pos(ball2NewPos);
      setBall2InSection(false);
    }
  };

  return (
    <>
      <div className="peterson-information-section">
        <main>
          <h1>Peterson's Solution</h1>
          <p> Peterson's solution is a classic solution to the critical section problem.The critical section problem ensures that no two processes change or modify a shared resource simultaneously.</p>
        </main>
        {/* <div className="peterson-info">
          <h1>Algorithm</h1>
          <p>
              <code>
                 
                 
                Entrance to the critical section is granted for process P0 if P1 does not want to enter its critical section and if P1 has given priority to P0 by setting turn to 0.
                The algorithm satisfies the three essential criteria to solve the critical-section problem i.e.mutual exclusion, progress, and bounded waiting.
              </code>
          </p>
        </div> */}
        <div className="peterson-info">
          <h1>Algorithm</h1>
          <p>
            <ol>
            <li>The algorithm uses two variables: flag and turn.</li>
            <li>A flag[n] value of true indicates that the process n wants to enter the critical section.</li>
            <li>Entrance to the critical section is granted for process P0 if P1 does not want to enter its critical section and if P1 has given priority to P0 by setting turn to 0.</li>
            <li>The algorithm satisfies the three essential criteria to solve the critical-section problem i.e.mutual exclusion, progress, and bounded waiting.</li>
            </ol>
          </p>
        </div>
      </div>
      <div className="peterson">
        <h1>Peterson Algorithm </h1>
        <p>
        <ul>
            <li>Step1: Click on the Simulate button to move the ball to the entry section.</li>
            <li>Step2: Click on the respective balls to move them into the critical section.</li>
            <li>Step3: Click on the Exit Critical Section button to remove the ball from critical section.</li>
          </ul>
        </p>
        <div
          onClick={() => handleApplyAlgorithms(1)}
          disabled={ball1InSection || !simulateButtonClicked}
        >
          <Ball top={ball1Pos.top} left={ball1Pos.left} />
        </div>
        <div
          onClick={() => handleApplyAlgorithms(2)}
          disabled={ball2InSection || !simulateButtonClicked}
        >
          <Ball top={ball2Pos.top} left={ball2Pos.left} />
        </div>
        <button className="Simulate" onClick={handleSimulate}>
          Simulate
        </button>
      </div>
      {/* <button className="exit-cirtical-section">
      </button> */}
      <button
        className="exit-cirtical-section"
        onClick={handleExitCriticalSection}
        disabled={!ball1InSection && !ball2InSection}
      >
        Exit Critical Section
      </button>
      <div className="critical-section">Critical Section</div>
      <div className="Remainder-section">Remainder Section</div>
      <div className="Entry-section">Entry Section</div>
    </>
  );
};
export default Peterson;
