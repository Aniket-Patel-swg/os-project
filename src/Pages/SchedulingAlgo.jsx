import React, { useState } from "react";
import "../Css/SchedulingAlgo.css";
// import Navbar from "./Navbar";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import Box from "@mui/material/Box";

const SchedulingAlgo = () => {
  const Processes = [createData("1", "", "", "", "", "", "", "")];
  const [ganttArray, setGanttArray] = useState([]);
  let ganttIndex = 0;
  let PID = 0;

  function createData(
    PID,
    Priority,
    Arrival_Time,
    Burst_Time,
    Completion_Time,
    TurnAround_Time,
    Waiting_Time,
    Response_Time
  ) {
    return {
      PID,
      Priority,
      Arrival_Time,
      Burst_Time,
      Completion_Time,
      TurnAround_Time,
      Waiting_Time,
      Response_Time,
    };
  }

  const [process, setProcess] = useState(Processes);
  //Add Process
  const addProcess = () => {
    let pid = Math.floor(100 * Math.random());
    setProcess([...process, createData(pid, "", "", "", "", "", "", "")]);

    console.log("hi");
  };

  //Delete Process
  const deleteProcess = (PID) => {
    const newProcess = process.filter((CurrProcess) => {
      return CurrProcess.PID !== PID;
    });
    //newProcess becomes new Array and it filtered out the process which we have clicked
    setProcess(newProcess);
  };

  //getting priority
  const priority = (e, i) => {
    const t = process;
    t[i]["Priority"] = e.target.value;
    setProcess(t);
    console.log(process);
  };

  const arrivalTime = (e, i) => {
    const t = process;
    t[i]["Arrival_Time"] = e.target.value;
    setProcess(t);
    console.log(process);
  };

  const burstTime = (e, i) => {
    const t = process;
    t[i]["Burst_Time"] = e.target.value;
    setProcess(t);
  };

  // const priorityPreemptive = require("../models/CPUScheduling");

  //Result
  const Result = async (process) => {
    // console.log(priorityScheduling(process));
    // let data = process;
    // const res = await axios.post("http://localhost:4000/schedule", {data : [...process]});
    console.log(process);
    try {
      const data = await axios.post("http://localhost:8000/schedule", {
        process: [...process],
      });
      const myData = data.data.process;
      const chartData = data.data.ganttAraay;
      setProcess(myData);
      console.log({ chartData });
      setGanttArray(chartData);
      console.log(myData);

      // let chartSection = document.getElementById('chart-section');
      // chartSection.textContent += chartData;

      // let chartSection = document.getElementById('chart-section');
      // chartSection.innerHTML = '';
      // chartData.map((item, index) => {
      //   const li = document.createElement('li');
      //   li.innerText = item;
      //   chartSection.appendChild(li);
      // });

      //   let chartSection = document.getElementById('chart-section');
      // chartSection.innerHTML = ""; // clear existing content
      // chartData.forEach((dataItem) => {
      //   let listItem = document.createElement("li");
      //   listItem.innerText = dataItem;
      //   chartSection.appendChild(listItem);
      // });
    } catch (err) {
      console.log(err);
    }
    console.log(typeof process);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="scheduling-algo-page">
        {/* <div className="video-container">
          <video src="../video.mp4" autoPlay loop muted></video>
        </div> */}

        <div className="table-container">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Process ID</TableCell>
                  <TableCell align="center">Process ID</TableCell>
                  <TableCell align="center">Priority</TableCell>
                  <TableCell align="center">Arrival Time(AT)</TableCell>
                  <TableCell align="center">Brust Time(BT)</TableCell>
                  <TableCell align="center">Completion Time(CT)</TableCell>
                  <TableCell align="center">Turn Around Time(TAT)</TableCell>
                  <TableCell align="center">Waiting Time(WT)</TableCell>
                  <TableCell align="center">Response Time(RT)</TableCell>
                  <TableCell align="center">Delete Process</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {process.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" name="processID">
                      {row.PID}
                    </TableCell>
                    <TableCell align="center" name="processID">
                     p{PID++}
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        //   hiddenLabel
                        //   name="priority"
                        id="filled-hidden-label-small"
                        variant="filled"
                        size="small"
                        onChange={(e) => priority(e, index)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        //   hiddenLabe
                        //   name="arrivalTime"
                        id="filled-hidden-label-small"
                        variant="filled"
                        size="small"
                        onChange={(e) => arrivalTime(e, index)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <TextField
                        hiddenLabel
                        //   name="burstTime"
                        id="filled-hidden-label-small"
                        variant="filled"
                        size="small"
                        onChange={(e) => {
                          burstTime(e, index);
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">{row.Completion_Time}</TableCell>
                    <TableCell align="center">{row.TurnAround_Time}</TableCell>
                    <TableCell align="center">{row.Waiting_Time}</TableCell>
                    <TableCell align="center">{row.Response_Time}</TableCell>
                    <TableCell align="center">
                      {row.del_process}
                      <IconButton
                        aria-label="delete"
                        onClick={() => deleteProcess(row.PID)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "center", padding: "10em" }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "#343536" }}
              onClick={() => {
                addProcess();
              }}
            >
              ADD PROCESS
            </Button>
            <Button variant="contained" onClick={() => Result(process)}>
              RESULT
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#f7404d" }}
              onClick={() => {
                window.location.reload();
              }}
            >
              RESET
            </Button>
          </Stack>
        </div>
      </div>
      <div className="chart">
        here chart will show
        <div id="chart-section">
          {ganttArray.map((dataItem, index) => (
            <>
              {/* <div key={index}>p{dataItem}</div> */}
              <Box
                component="span"
                sx={{ position: "relative", p: 2, border: "1px dashed grey" }}
              >
                <Button>p{dataItem}</Button>
                <span
                  style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "1px",
                  }}
                >
                  {ganttIndex++}
                </span>
              </Box>
            </>
          ))}{ganttIndex}
        </div>
      </div>
    </>
  );
};

export default SchedulingAlgo;

// import React, { useState, useEffect } from "react";
// import "../Css/SchedulingAlgo.css";
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
//   Stack,
//   Button,
//   IconButton,
//   TextField,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import axios from "axios";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const SchedulingAlgo = () => {
//   const Processes = [createData("1", "", "", "", "", "", "", "")];

//   function createData(
//     PID,
//     Priority,
//     Arrival_Time,
//     Burst_Time,
//     Completion_Time,
//     TurnAround_Time,
//     Waiting_Time,
//     Response_Time
//   ) {
//     return {
//       PID,
//       Priority,
//       Arrival_Time,
//       Burst_Time,
//       Completion_Time,
//       TurnAround_Time,
//       Waiting_Time,
//       Response_Time,
//     };
//   }

//   const [process, setProcess] = useState(Processes);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("/priority_table", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({}),
//         });
//         const data = await response.json();
//         setData(data.process);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   }, []);

//   // Transform the data into the format required by Rechart
//   const chartData = process.map((process, index) => ({
//     name: `Process ${index + 1}`,
//     start: process.Arrival_Time,
//     end: process.Completion_Time,
//   }));

//   const dataMax = Math.max(...data.map((process) => process.Completion_Time));

//   //Add Process
//   const addProcess = () => {
//     let pid = Math.floor(100 * Math.random());
//     setProcess([...process, createData(pid, "", "", "", "", "", "", "")]);

//     console.log("hi");
//   };

//   //Delete Process
//   const deleteProcess = (PID) => {
//     const newProcess = process.filter((CurrProcess) => {
//       return CurrProcess.PID !== PID;
//     });
//     //newProcess becomes new Array and it filtered out the process which we have clicked
//     setProcess(newProcess);
//   };

//   //getting priority
//   const priority = (e, i) => {
//     const t = process;
//     t[i]["Priority"] = e.target.value;
//     setProcess(t);
//     console.log(process);
//   };

//   const arrivalTime = (e, i) => {
//     const t = process;
//     t[i]["Arrival_Time"] = e.target.value;
//     setProcess(t);
//     console.log(process);
//   };

//   const burstTime = (e, i) => {
//     const t = process;
//     t[i]["Burst_Time"] = e.target.value;
//     setProcess(t);
//   };

//   // const priorityPreemptive = require("../models/CPUScheduling");

//   //Result
//   const Result = async (process) => {
//     // console.log(priorityScheduling(process));
//     // let data = process;
//     // const res = await axios.post("http://localhost:4000/schedule", {data : [...process]});
//     console.log(process);
//     try {
//       const data = await axios.post("http://localhost:8000/schedule", {
//         process: [...process],
//       });
//       const myData = data.data.process;
//       setProcess(myData);
//       console.log(myData);
//     } catch (err) {
//       console.log(err);
//     }
//     console.log(typeof process);
//   };

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="scheduling-algo-page">
//         <div className="video-container">
//           {/* <video src="../video.mp4" autoPlay loop muted></video> */}
//         </div>

//         <div className="table-container">
//           <TableContainer component={Paper}>
//             <Table aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="center">Process ID</TableCell>
//                   <TableCell align="center">Priority</TableCell>
//                   <TableCell align="center">Arrival Time(AT)</TableCell>
//                   <TableCell align="center">Brust Time(BT)</TableCell>
//                   <TableCell align="center">Completion Time(CT)</TableCell>
//                   <TableCell align="center">Turn Around Time(TAT)</TableCell>
//                   <TableCell align="center">Waiting Time(WT)</TableCell>
//                   <TableCell align="center">Response Time(RT)</TableCell>
//                   <TableCell align="center">Delete Process</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {process.map((row, index) => (
//                   <TableRow
//                     key={row.id}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell align="center" name="processID">
//                       {row.PID}
//                     </TableCell>
//                     <TableCell align="center">
//                       <TextField
//                         //   hiddenLabel
//                         //   name="priority"
//                         id="filled-hidden-label-small"
//                         variant="filled"
//                         size="small"
//                         onChange={(e) => priority(e, index)}
//                       />
//                     </TableCell>
//                     <TableCell align="center">
//                       <TextField
//                         //   hiddenLabe
//                         //   name="arrivalTime"
//                         id="filled-hidden-label-small"
//                         variant="filled"
//                         size="small"
//                         onChange={(e) => arrivalTime(e, index)}
//                       />
//                     </TableCell>
//                     <TableCell align="center">
//                       <TextField
//                         hiddenLabel
//                         //   name="burstTime"
//                         id="filled-hidden-label-small"
//                         variant="filled"
//                         size="small"
//                         onChange={(e) => {
//                           burstTime(e, index);
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell align="center">{row.Completion_Time}</TableCell>
//                     <TableCell align="center">{row.TurnAround_Time}</TableCell>
//                     <TableCell align="center">{row.Waiting_Time}</TableCell>
//                     <TableCell align="center">{row.Response_Time}</TableCell>
//                     <TableCell align="center">
//                       {row.del_process}
//                       <IconButton
//                         aria-label="delete"
//                         onClick={() => deleteProcess(row.PID)}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Stack
//             spacing={2}
//             direction="row"
//             style={{ justifyContent: "center", padding: "10em" }}
//           >
//             <Button
//               variant="contained"
//               style={{ backgroundColor: "#343536" }}
//               onClick={() => {
//                 addProcess();
//               }}
//             >
//               ADD PROCESS
//             </Button>
//             <Button variant="contained" onClick={() => Result(process)}>
//               RESULT
//             </Button>
//             <Button variant="contained" style={{ backgroundColor: "#f7404d" }}>
//               RESET
//             </Button>
//             <Button>Get Gantt chart</Button>
//           </Stack>
//         </div>
//         <div className="chart">
//         <ResponsiveContainer width="100%" height={400} aspect={3}>
//           <BarChart
//             data={chartData}
//             margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//           >
//             <XAxis dataKey="name" />
//             <YAxis type="number" domain={[0, dataMax]} />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="end" stackId="a" fill="#8884d8" />
//             <Bar dataKey="start" stackId="a" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       </div>
//     </>
//   );
// };

// export default SchedulingAlgo;
