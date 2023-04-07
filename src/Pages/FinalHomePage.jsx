import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Blob from "../Blob/Blob.js";
import "../Css/FinalHomePage.css";
import NavBar from "../Css/NavBar.jsx";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Team from './Team.jsx';

const FinalHomePage = () => {
  const teamRef = useRef(null);
  const handleTeamClick = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setShowButton(position > 250);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />
      <div class="particles">
        <div className="final-home-page">
          <div className="canvas-container">
            <Suspense fallback={<Html>Loading...</Html>}>
              <Canvas
                camera={{ position: [0.0, 0.0, 10.0] }}
                style={{ width: "100%", height: "100vh" }}
              >
                <Blob />
              </Canvas>
            </Suspense>
          </div>
          <div className="intro-section">
            <h1>OS Project </h1>
          </div>
        </div>
        {/* {showButton &&
          <section className="scroll-button">
            <div className="back-to-top-btn" onClick={handleClick}>
              <ArrowDropUpIcon fontSize="large"/>
            </div>
          </section>
        } */}
        <section className="scroll-button">
          <div className="back-to-top-btn" onClick={handleClick}>
            <ArrowDropUpIcon fontSize="large" />
          </div>
        </section>
      </div>

      {/* Algorithm Section  */}
      <div className="algorithms-section">
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>Priority Scheduling Algorithm</h1>
            <p>
              The Preemptive Priority CPU Scheduling Algorithm Is A Preemptive
              Method Of CPU Scheduling Algorithms That Work Based On Process
              Priority. When A Process Arrives In The Ready Queue, Its Priority
              Is Compared With The Priority Of Other Processes In The Ready
              Queue And The Priority Of Processes Being Executed By The CPU At
              That Time. The Process With The Highest Priority Among All
              Available Processes Gets The CPU Next.
            </p>
          </section>
          <section className="button">
            <a href="/peterson">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
        <div className="algo-vector">
          <img src="system.png" alt="" />
        </div>
      </div>

      <div className="algorithms-section">
        <div className="algo-vector">
          <img src="tech.png" alt="" />
        </div>
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>Peterson Algorithm</h1>
            <p>
              Peterson's algorithm is a process synchronization algorithm. It is
              a simultaneous mutual exclusion programming algorithm that allows
              two or more processes to share a single-use resource without
              conflict, using only shared memory for communication.
            </p>
          </section>
          <section className="button">
            <a href="/SchedulingAlgo">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
      </div>

      <div className="algorithms-section">
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>First-Come-First Serve disk scheduling algorithm</h1>
            <p>
              FCFS is the simplest disk scheduling algorithm. As the name
              suggests, this algorithm entertains requests in the order they
              arrive in the disk queue. The algorithm looks very fair and there
              is no starvation (all requests are serviced sequentially) but
              generally, it does not provide the fastest service.
            </p>
          </section>
          <section className="button">
            <a href="/firstcomefirstserve">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
        <div className="algo-vector">
          <img src="puzzle.png" alt="" />
        </div>
      </div>

      <div className="algorithms-section">
        <div className="algo-vector">
          <img src="tech.png" alt="" />
        </div>
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>Optimal Page replacement algorithm</h1>
            <p>
              The page replacement algorithm decides which memory page is to be
              replaced. The process of replacement is sometimes called swap out
              or write to disk. Page replacement is done when the requested page
              is not found in the main memory (page fault).
            </p>
          </section>
          <section className="button">
            <a href="/optr">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
      </div>

      <div className="team-section" ref={teamRef}>
        <h1>Our Team</h1>
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
      </div>
      <Team />
    </>
  );
};

export default FinalHomePage;
