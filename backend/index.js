// const { PermPhoneMsg } = require("@mui/icons-material");
require("dotenv").config()
const mongoose = require("mongoose");
const PriorityTable = require("./Models/PriorityTable.js")
const express = require("express");
const app = express();
const cors = require("cors");//Cross origin resorce sharing
app.use(cors());
// const body = require("body-parser");
// app.use(body.json());
app.use(express.json());


function priorityScheduling(process) {
  let ganttAraay = [];
    if(!process || !process.length) return [];
    let currentTime = 0, completed = 0;
    let n = process.length;
    if (n == 0) return [];
    let isCompleted = Array(process.length).fill(0);
    let burstRemaining = process.map((x) => x.Burst_Time);
  
    while (completed !== n) {
      let index = -1;
      let max = Number.MAX_SAFE_INTEGER;
      // Priority selection 
      // decides the process with highest priority 
      for (let i = 0; i < n; i++) {
        if (process[i].Arrival_Time <= currentTime && isCompleted[i] === 0) {
          if (process[i].Priority < max) {
            max = process[i].Priority;
            index = i;             
          }
          if (process[i].Priority === max) {
            if (process[i].Arrival_Time < process[index].Arrival_Time) {
              max = process[i].Priority;
              index = i;
            }
          }
        }
      }
      if (index !== -1) {
        if (burstRemaining[index] === process[index].Burst_Time) {
          // response time is being calculated here
          process[index].Response_Time = currentTime-process[index].Arrival_Time;
        }
        burstRemaining[index] -= 1;
        currentTime++;
        ganttAraay.push(index);
        if (burstRemaining[index] === 0) {
         // completion time is being calculated here 
          process[index].Completion_Time = currentTime;
          // turn around time is being calculated here
          process[index].TurnAround_Time = process[index].Completion_Time - process[index].Arrival_Time;
          // waiting time is being calculated here
          process[index].Waiting_Time = process[index].TurnAround_Time - process[index].Burst_Time;
          isCompleted[index] = 1;
          completed++;
        }
      } else {
        currentTime++;
        ganttAraay.push(index);
      }
    }
    return {process,ganttAraay};
  } 

app.post("/schedule", (req,res)=>{
    // console.log(req.body);
    const {process,ganttAraay} = priorityScheduling(req.body.process);
    // let data = priorityScheduling(process);
    // console.log(data);
    const myData = new priorityScheduling({process});
    myData.save((err)=>{
        if(err) return  res.status(500).json({process : [] });
        return  res.status(200).json({process,ganttAraay})
    });
    // res.sendStatus(200);
})


mongoose.connect(process.env.mongo, (err) => {
    if(err) throw err;
    app.listen(8000, (err)=>{
        if(err) throw err;
        console.log("App is listening on port 8000");
    })
})