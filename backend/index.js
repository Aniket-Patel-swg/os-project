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
    if(!process || !process.length) return [];
    let currentTime = 0, completed = 0;
    let n = process.length;
    if (n == 0) return [];
    let isCompleted = Array(process.length).fill(0);
    let prev = 0;
    let burstRemaining = process.map((x) => x.Burst_Time);
  
    while (completed !== n) {
      let index = -1;
      let max = Number.MAX_SAFE_INTEGER;
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
          process[index].Response_Time = currentTime-process[index].Arrival_Time;
        }
        burstRemaining[index] -= 1;
        currentTime++;
        prev = currentTime;
        if (burstRemaining[index] === 0) {
          process[index].Completion_Time = currentTime;
          process[index].TurnAround_Time = process[index].Completion_Time - process[index].Arrival_Time;
          process[index].Waiting_Time = process[index].TurnAround_Time - process[index].Burst_Time;
          isCompleted[index] = 1;
          completed++;
        }
      } else {
        currentTime++;
      }
    }
    return (process);
  }
  

app.post("/schedule", (req,res)=>{
    // console.log(req.body);
    const {process} = req.body;
    let data = priorityScheduling(process);
    // console.log(data);
    const myData = new PriorityTable({process : data});
    myData.save((err)=>{
        if(err) return  res.status(500).json({process : [] });
        return  res.status(200).json({process : data})
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