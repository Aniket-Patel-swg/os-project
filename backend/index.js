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
      }
    }
    return {process,ganttAraay};
  } 

app.post("/schedule", (req,res)=>{
    // console.log(req.body);
    const {process,ganttAraay} = priorityScheduling(req.body.process);
    // let data = priorityScheduling(process);
    // console.log(data);
    const myData = new PriorityTable({process});
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

// require("dotenv").config();
// const mongoose = require("mongoose");
// const PriorityTable = require("./Models/PriorityTable.js");
// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// function priorityScheduling(process) {
//   if (!process || !process.length) return [];
//   let currentTime = 0,
//     completed = 0;
//   let n = process.length;
//   if (n == 0) return [];
//   let isCompleted = Array(process.length).fill(0);
//   let prev = 0;
//   let burstRemaining = process.map((x) => x.Burst_Time);
//   let ganttChart = [];

//   while (completed !== n) {
//     let index = -1;
//     let max = Number.MAX_SAFE_INTEGER;
//     for (let i = 0; i < n; i++) {
//       if (process[i].Arrival_Time <= currentTime && isCompleted[i] === 0) {
//         if (process[i].Priority < max) {
//           max = process[i].Priority;
//           index = i;
//         }
//         if (process[i].Priority === max) {
//           if (process[i].Arrival_Time < process[index].Arrival_Time) {
//             max = process[i].Priority;
//             index = i;
//           }
//         }
//       }
//     }
//     if (index !== -1) {
//       if (burstRemaining[index] === process[index].Burst_Time) {
//         process[index].Response_Time = currentTime - process[index].Arrival_Time;
//       }
//       burstRemaining[index] -= 1;
//       currentTime++;
//       if (burstRemaining[index] === 0) {
//         process[index].Completion_Time = currentTime;
//         process[index].TurnAround_Time =
//           process[index].Completion_Time - process[index].Arrival_Time;
//         process[index].Waiting_Time =
//           process[index].TurnAround_Time - process[index].Burst_Time;
//         isCompleted[index] = 1;
//         completed++;
//       }
//       ganttChart.push({
//         process: process[index].Process_ID,
//         start: prev,
//         end: currentTime,
//       });
//       prev = currentTime;
//     } else {
//       currentTime++;
//     }
//   }
//   return { process, ganttChart };
// }

// app.post("/schedule", (req,res)=>{
//   // console.log(req.body);
//   const {process} = req.body;
//   let data = priorityScheduling(process);
//   // console.log(data);
//   const myData = new PriorityTable({process : data});
//   myData.save((err)=>{
//       if(err) return  res.status(500).json({process : [] });
//       return  res.status(200).json({process : data})
//   });
//   // res.sendStatus(200);
// })

// app.post("/priority_table", async (req, res) => {
//   try {
//     const result = await PriorityTable.findOne(
//       {},
//       {},
//       { sort: { created_at: -1 } }
//     );
//     if (!result) return res.status(404).json({ process: [], ganttChart: [] });
//     return res.status(200).json({ process: result.process, ganttChart: result.ganttChart });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// mongoose.connect(process.env.mongo, (err) => {
//   if(err) throw err;
//   app.listen(8000, (err)=>{
//     if(err) throw err;
//     console.log("App is listening on port 8000");
//   })
// });

