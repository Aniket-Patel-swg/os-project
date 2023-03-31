import React from "react";
import '../Css/Homepage.css';
import { useRef } from "react";


// import Navbar from "./Navbar.jsx";
// import Team from "./Team";
import { Link } from "react-router-dom";

const Homepage = () => {
    const handleClick = () => {
        // define what happens when the button is clicked
    };
    const teamRef = useRef(null);
  
    const handleTeamClick = () => {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return ( 
        <>  
           <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Algorithms</a>
        <a href="" ref={teamRef} onClick={handleTeamClick} >Team</a>
        <img src="logo.png" alt="Logo" />
      </nav>


                <div className="home-page">
           <div>
           <div className="img1">
                <img src="Scientist.png" alt="scientist"></img>
            </div>
            <h1 className='headingr'>Operating System Simulation</h1>
            
            <div className='para'>
            <p >CPU scheduling is the process by which the operating system decides which process or task to execute next on a CPU 
                (Central Processing Unit) when multiple processes are competing for the same resource.</p>
            </div>
           
           
            </div>
            <div className="img2">
                <img src="system.png" alt="system"></img>
            </div>
            
            <div >
                <h1 className='heading'>Algorithm List</h1>

            </div>
            <div>
                <h2 className="algo1">Priority Scheduling Algorithm</h2>
                <p className="para1">The Preemptive Priority CPU Scheduling Algorithm is a preemptive method of CPU scheduling algorithms that work based on process priority. When a process arrives in the ready queue, its priority is compared with the priority of other processes in the ready queue and the priority of processes being executed by the CPU at that time. 
                The process with the highest priority among all available processes gets the CPU next.</p>
                <Link to="/SchedulingAlgo">
                <button className="button1" onClick={handleClick}>
                        Open Simulator
                </button>
                </Link>
            </div>
            <div className="img3">
                <img src="tech.png" alt="tech"></img>
            </div>
            <div>
                <h2 className="algo2">Peterson's Algorithm</h2>
                <p className="para2">Peterson's algorithm is a process synchronization algorithm. It is a simultaneous mutual exclusion programming algorithm that allows two
                 or more processes to share a single-use resource without conflict, using only shared memory for communication.</p>
                 <Link to="/Peterson">
                <button className="button2" onClick={handleClick}>
                        Open Simulator
                </button>
                </Link>
            </div>
            <div className="img4">
                <img src="book.png" alt="book"></img>
            </div>
            <div>
                <h2 className="algo3">First-Come-First Serve disk scheduling algorithm</h2>
                <p className="para3">FCFS is the simplest disk scheduling algorithm. As the name suggests, this algorithm entertains requests in the order they arrive in the disk queue. The algorithm looks very 
                fair and there is no starvation (all requests are serviced sequentially) but generally, it does not provide the fastest service.</p>
                <Link to = "/firstcomefirstserve"><button className="button3" onClick={handleClick}>Open Simulator</button></Link>
            </div>
            <div className="img5">
                <img src="puzzle.png" alt="puzzle"></img>
            </div>

            <div>
                <h2 className="algo4">Optimal Page replacement algorithm</h2>
                <p className="para4">The page replacement algorithm decides which memory page is to be replaced. The process of replacement is sometimes called swap out 
                or write to disk. Page replacement is done when the requested page is not found in the main memory (page fault).</p>
                <Link to = "/OptPR"><button className="button4" onClick={handleClick}>Open Simulator</button></Link>
            </div>

            <div className="separator"></div>
            <div className="separator2"></div>
            <div ref={teamRef}>
          <section id="Team">
            <h2 className="Team">Our Team:</h2>
            <p className="Nupur">Nupur Kapoor : 21BCP255</p>
            <p className="Aniket">Aniket Patel : 21BCP256</p>
            <p className="Khushi">Khushi Desai : 21BCP264</p>
            <p className="Dev">Dev Chapatwala : 21BCP266</p>
            <p className="Vishwa">Vishwa Nanavati : 21BCP272</p>
          </section>
        </div>

            
        </div>
            

        </>
)};

export default Homepage;