// <<<<<<< HEAD
// import React, { useState } from "react";
// import "../Css/SchedulingAlgo.css";


// const SchedulingAlgo = () => {
//   // function createProcess(

//   // ) {

//   // }
//   // const tableData = [{
//   //     "process_id": 1,
//   //     "priority": "",
//   //     "AT": "",
//   //     "BT": "",
//   //     "CT": "",
//   //     "TAT": "",
//   //     "WT": "",
//   //     "RT": "",
//   //     "del_process": ""
//   //   }]

//   //   const [formData, setFormData] = useState([
//   //     {
//   //         "process_id" :(Math.floor((Math.random()*100))),
//   //         "priority" : "",
//   //         "AT" : "",
//   //         "BT" : "",
//   //         "CT" : "",
//   //         "TAT" : "",
//   //         "WT" : "",
//   //         "RT" : "",
//   //         "del_process" : ""
//   //     }
//   //   ])

//   //   const handleChange = (index,event) => {
//   //     const values = [...formData];
//   //     values[index][event.target.name] = event.target.value;
//   //     setFormData(values);
//   //   }

//   //   const handleAddField = () => {
//   //     console.log('Add Button is clicked !')
//   //     const values = {
//   //             processID : (Math.floor((Math.random()*100))),
//   //             priority : "",
//   //             arrivalTime : "",
//   //             burstTime : ""
//   //     }
//   //     setFormData([...formData,values]);
//   //   }

//   //   const handleRemoveField = (index,PID) =>{
//   //         console.log('Remove button is clicked !')
//   //         const values = [...formData]
//   //         values.splice(index,1);
//   //         setFormData(values);
//   //   }

import React, {useState} from "react";
import '../Css/SchedulingAlgo.css';
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

const SchedulingAlgo = () => {
//     return ( 
//         <>  <Navbar />
//             <div className="algo">
//                 Scheduling Algo check text
//             </div>
//         </>
//      );
// }

const Processes = [createData("1", "", "", "", "", "", "", "")];

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
  // const regex = /^[+]?([1-9][0-9](?:[\.][0-9]*)?|0\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/
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
      setProcess(myData);
      console.log(myData);
    } catch (err) {
      console.log(err);
    }
    console.log(typeof(process));
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="scheduling-algo-page">
        <div className="video-container">
          <video src="../video.mp4" autoPlay loop muted></video>
        </div>
        <div className="table-container">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
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
                  <TableCell align="center">
                    <TextField
                    //   hiddenLabel
                    //   name="priority"
                      id="filled-hidden-label-small"
                      variant="filled"
                      size="small"
                      onChange={(e) => priority(e,index)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                    //   hiddenLabe
                    //   name="arrivalTime"
                      id="filled-hidden-label-small"
                      variant="filled"
                      size="small"
                      onChange={(e) => arrivalTime(e,index)}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      hiddenLabel
                    //   name="burstTime"
                      id="filled-hidden-label-small"
                      variant="filled"
                      size="small"
                      onChange={(e) => {burstTime(e,index)}}
                    />
                  </TableCell>
                  <TableCell align="center">{row.Completion_Time}</TableCell>
                  <TableCell align="center">{row.TurnAround_Time}</TableCell>
                  <TableCell align="center">{row.Waiting_Time}</TableCell>
                  <TableCell align="center">{row.Response_Time}</TableCell>
                  <TableCell align="center">
                    {row.del_process}
                    <IconButton aria-label="delete">
                      <button onClick={() => deleteProcess(row.PID)}>
                        <DeleteIcon />
                      </button>
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
          <Button variant="contained"
          onClick={()=>Result(process)}
          >RESULT</Button>
          <Button variant="contained" style={{ backgroundColor: "#f7404d" }}>
            RESET
          </Button>
        </Stack>
        </div>
      </div>
    </>
  );
};

export default SchedulingAlgo;
