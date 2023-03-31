import React from "react";

function GanttChart({ ganttArray }) {
  return (
    <div className="gantt-chart">
      {ganttArray.map((process) => (
        <div
          key={process.PID}
          style={{
            height: "50px",
            backgroundColor: process.color,
            width: `${process.duration}%`,
            display: "inline-block",
            border: "1px solid black",
          }}
        >
          {/* <p>{process.PID}</p> */}
        </div>
      ))}
    </div>
  );
}

export default GanttChart;
