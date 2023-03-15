import React, { useState } from 'react';

function FCFS () {
  const [processes, setProcesses] = useState([{ arrivalTime: '', burstTime: '' }]);
  const [completionTimes, setCompletionTimes] = useState([]);

  // Add a new row to the table
  const addRow = () => {
    setProcesses(prevProcesses => [...prevProcesses, { arrivalTime: '', burstTime: '' }]);
  };

  // Handle changes to the input fields
  const handleChange = (index, key, value) => {
    setProcesses(prevProcesses => {
      const newProcesses = [...prevProcesses];
      newProcesses[index][key] = value;
      return newProcesses;
    });
  };

  // Calculate completion times for each process
  let completionTime = 0;
  for (let i = 0; i < processes.length; i++) {
    const process = processes[i];
    completionTime += parseInt(process.burstTime);
    setCompletionTimes(prevCompletionTimes => [...prevCompletionTimes, completionTime]);
  }

  // Calculate average waiting time
  const waitingTimes = processes.map((process, index) => {
    return completionTimes[index] - parseInt(process.arrivalTime) - parseInt(process.burstTime);
  });
  const averageWaitingTime = waitingTimes.reduce((acc, val) => acc + val, 0) / waitingTimes.length;

  return (
    <div>
      <h2>First Come First Serve Algorithm</h2>
      <table>
        <thead>
          <tr>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, index) => (
            <tr key={index}>
              <td><input type="number" value={process.arrivalTime} onChange={(e) => handleChange(index, 'arrivalTime', e.target.value)} /></td>
              <td><input type="number" value={process.burstTime} onChange={(e) => handleChange(index, 'burstTime', e.target.value)} /></td>
              <td>{index === processes.length - 1 ? <button onClick={addRow}>Add Row</button> : null}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Process</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Completion Time</th>
            <th>Waiting Time</th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{process.arrivalTime}</td>
              <td>{process.burstTime}</td>
              <td>{completionTimes[index]}</td>
              <td>{waitingTimes[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Average Waiting Time: {isNaN(averageWaitingTime) ? 0 : averageWaitingTime}</p>
    </div>
  );
}

export default FCFS;
