import React from "react";
import '../Css/Homepage.css';
// import Navbar from "./Navbar.jsx";
// import Team from "./Team";
import { Link } from "react-router-dom";

const Homepage = () => {
    const handleClick = () => {

    }
    return ( 
        <>  
            {/* <Navbar/> */}
                <div className="home-page">
           <div>
           <div className="img1">
                <img src="scientist.png" alt="scientist"></img>
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
                 <button className="button2" onClick={handleClick}>
                    <Link to="/peterson">
                    Open Simulator
                    </Link>
                </button>
            </div>
            <div className="img4">
                <img src="book.png" alt="book"></img>
            </div>
            <div>
                <h2 className="algo3">First-Come-First Serve disk scheduling algorithm</h2>
                <p className="para3">FCFS is the simplest disk scheduling algorithm. As the name suggests, this algorithm entertains requests in the order they arrive in the disk queue. The algorithm looks very 
                fair and there is no starvation (all requests are serviced sequentially) but generally, it does not provide the fastest service.</p>
                <button className="button3" onClick={handleClick}>
                    <Link to="/fcfs">
                        Open Simulator
                    </Link>
                </button>
            </div>
            <div className="img5">
                <img src="puzzle.png" alt="puzzle"></img>
            </div>

            <div>
                <h2 className="algo4">Optimal Page replacement algorithm</h2>
                <p className="para4">The page replacement algorithm decides which memory page is to be replaced. The process of replacement is sometimes called swap out 
                or write to disk. Page replacement is done when the requested page is not found in the main memory (page fault).</p>
                <button className="button4" onClick={handleClick}>Open Simulator</button>
            </div>
          {/* <Team /> */}
        </div>
        </>
)};

export default Homepage;