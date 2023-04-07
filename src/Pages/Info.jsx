import React from "react";
import '../Css/Infocss.css';
import { Link } from "react-router-dom";

const PriorityAlgorithmInfo = () => {
    const handleClick = () => {

    }
  return (
    <div>
        
        <div className="img2">
                <img src="system.png" alt="system"></img>
        </div>

        <div>
      <h2>Priority Algorithm Information</h2>
      <p >In Priority scheduling, there is a priority number assigned to each process. In some systems, the lower the number, the higher the priority. While, in the others, the higher the number, the higher will be the priority. The Process with the higher priority among the available processes is given the CPU. There are two types of priority scheduling algorithm exists. One is Preemptive priority scheduling while the other is Non Preemptive Priority scheduling.</p>
      <p>The priority number assigned to each of the process may or may not vary. If the priority number doesn't change itself throughout the process, it is called static priority, while if it keeps changing itself at the regular intervals, it is called dynamic priority.</p>
      {/* <ul>
        <li>First-in, first-out (FIFO) - tasks are completed in the order they are received</li>
        <li>Weighted shortest job first (WSJF) - tasks are prioritized based on their business value, time criticality, and other factors</li>
        <li>Eisenhower Matrix - tasks are categorized as urgent and important, important but not urgent, urgent but not important, or neither urgent nor important</li>
      </ul>
      <p>By using a priority algorithm, individuals and organizations can improve their productivity, reduce stress, and achieve their goals more effectively.</p> */}
        </div>

        <div>
        <Link to="">
                <button className="button" onClick={handleClick}>
                        Open Simulator
                </button>
        </Link>    
        </div>
    </div>
  );
};

export default PriorityAlgorithmInfo;