// import React, { useState } from "react";
// import "../Css/Peterson.css";
// import Ball from "./Ball.jsx";

// const Peterson = () => {
//   const [ball1Pos, setBall1Pos] = useState({ top: 50, left: 50 });
//   const [ball2Pos, setBall2Pos] = useState({ top: 100, left: 100 });
//   const [ball1InSection, setBall1InSection] = useState(false);
//   const [ball2InSection, setBall2InSection] = useState(false);
//   const [simulateButtonClicked, setSimulateButtonClicked] = useState(false);

//   const handleSimulate = () => {
//     const screenWidth = window.innerWidth;
//     const ball1NewPos = { top: 50, left: screenWidth * 0.5 };
//     const ball2NewPos = { top: 100, left: screenWidth * 0.5 };
//     setBall1Pos(ball1NewPos);
//     setBall2Pos(ball2NewPos);
//     setSimulateButtonClicked(true);
//   };

//   const handleApplyAlgorithms = (ballNumber) => {
//     const screenWidth = window.innerWidth;
//     console.log("handle apply algorithm is clicked");
//     if (ball1InSection || ball2InSection) {
//       console.log("one process is already in critical section");
//       alert("One process is already in critical section");
//       return;
//     }
//     if (ballNumber === 1) {
//       console.log("ball 1 is in critical section");
//       const ball1NewPos = { top: 50, left: screenWidth * 0.65 };
//       setBall1Pos(ball1NewPos);
//       setBall1InSection(true);
//     } else if (ballNumber === 2) {
//       console.log("ball 2 is in critical section");
//       const ball2NewPos = { top: 100, left: screenWidth * 0.65 };
//       setBall2Pos(ball2NewPos);
//       setBall2InSection(true);
//     }
//   };

//   const handleExitCriticalSection = () => {
//     const screenWidth = window.innerWidth;
//     console.log("Exit Critical Section button clicked");
//     if (ball1InSection) {
//       console.log("ball 1 is getting out of critical section");
//       const ball1NewPos = { top: 50, left: screenWidth * 0.7 };
//       setBall1Pos(ball1NewPos);
//       setBall1InSection(false);
//     } else if (ball2InSection) {
//       console.log("ball 2 is getting out of critical section");
//       const ball2NewPos = { top: 100, left: screenWidth * 0.7 };
//       setBall2Pos(ball2NewPos);
//       setBall2InSection(false);
//     }
//   };

//   return (
//     <>
//     <h1>peterson algorithm</h1>
//       <div>
//         <button onClick={() => handleApplyAlgorithms(1)} disabled={ball1InSection || !simulateButtonClicked}>
//           <Ball top={ball1Pos.top} left={ball1Pos.left} />
//         </button>
//         <button onClick={() => handleApplyAlgorithms(2)} disabled={ball2InSection || !simulateButtonClicked}>
//           <Ball top={ball2Pos.top} left={ball2Pos.left} />
//         </button>
//         <button onClick={handleSimulate}>Simulate</button>
//       </div>
//       <button className="exit-cirtical-section">
//       </button>
//       <button onClick={handleExitCriticalSection} disabled={!ball1InSection && !ball2InSection}>
//         Exit Critical Section
//       </button>
//       <div className="critical-section">
//         Critical Section
//       </div>
// </>
// );
// };
// export default Peterson;


import React, { useState } from "react";
import "../Css/Peterson.css";
import Ball from "./Ball.jsx";

const Peterson = () => {
  const [ball1Pos, setBall1Pos] = useState({ top: 50, left: 50 });
  const [ball2Pos, setBall2Pos] = useState({ top: 100, left: 100 });
  const [ball1InSection, setBall1InSection] = useState(false);
  const [ball2InSection, setBall2InSection] = useState(false);
  const [simulateButtonClicked, setSimulateButtonClicked] = useState(false);

  const handleSimulate = () => {
    const screenWidth = window.innerWidth;
    const ball1NewPos = { top: 50, left: screenWidth * 0.5 };
    const ball2NewPos = { top: 100, left: screenWidth * 0.5 };
    setBall1Pos(ball1NewPos);
    setBall2Pos(ball2NewPos);
    setSimulateButtonClicked(true);
  };

  const handleApplyAlgorithms = (ballNumber) => {
    const screenWidth = window.innerWidth;
    console.log("handle apply algorithm is clicked");
    if (ball1InSection || ball2InSection) {
      console.log("one process is already in critical section");
      alert("One process is already in critical section");
      return;
    }
    if (ballNumber === 1) {
      console.log("ball 1 is in critical section");
      const ball1NewPos = { top: 50, left: screenWidth * 0.65 };
      setBall1Pos(ball1NewPos);
      setBall1InSection(true);
    } else if (ballNumber === 2) {
      console.log("ball 2 is in critical section");
      const ball2NewPos = { top: 100, left: screenWidth * 0.65 };
      setBall2Pos(ball2NewPos);
      setBall2InSection(true);
    }
  };

  const handleExitCriticalSection = () => {
    const screenWidth = window.innerWidth;
    console.log("Exit Critical Section button clicked");
    if (ball1InSection) {
      console.log("ball 1 is getting out of critical section");
      const ball1NewPos = { top: 50, left: screenWidth * 0.7 };
      setBall1Pos(ball1NewPos);
      setBall1InSection(false);
    } else if (ball2InSection) {
      console.log("ball 2 is getting out of critical section");
      const ball2NewPos = { top: 100, left: screenWidth * 0.7 };
      setBall2Pos(ball2NewPos);
      setBall2InSection(false);
    }
  };

  return (
    <>
      {/* Check text */}
      <div>
        <h1>Peterson Algorithm  </h1>
        <button onClick={() => handleApplyAlgorithms(1)} disabled={ball1InSection || !simulateButtonClicked}>
          <Ball top={ball1Pos.top} left={ball1Pos.left} />
        </button>
        <button onClick={() => handleApplyAlgorithms(2)} disabled={ball2InSection || !simulateButtonClicked}>
          <Ball top={ball2Pos.top} left={ball2Pos.left} />
        </button>
        <button className="Simulate" onClick={handleSimulate}>Simulate</button>
      </div>
      {/* <button className="exit-cirtical-section">
      </button> */}
      <button className="exit-cirtical-section" onClick={handleExitCriticalSection} disabled={!ball1InSection && !ball2InSection}>
        Exit Critical Section
      </button>
      <div className="critical-section">
        Critical Section
      </div>
      <div className="Remainder-section">
        Remainder Section
      </div>
      <div className="Entry-section">
        Entry Section
      </div>

</>
);
};
export default Peterson;