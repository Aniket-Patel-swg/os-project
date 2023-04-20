// // const { PermPhoneMsg } = require("@mui/icons-material");
// require("dotenv").config()
// const mongoose = require("mongoose");
// const PriorityTable = require("./Models/PriorityTable.js")
// const express = require("express");
// const app = express();
// const cors = require("cors");//Cross origin resorce sharing
// app.use(cors());
// // const body = require("body-parser");
// // app.use(body.json());
// app.use(express.json());


// function priorityScheduling(process) {
//   let ganttAraay = [];
//     if(!process || !process.length) return [];
//     let currentTime = 0, completed = 0;
//     let n = process.length;
//     if (n == 0) return [];
//     let isCompleted = Array(process.length).fill(0);
//     let burstRemaining = process.map((x) => x.Burst_Time);
// function priorityScheduling(process) {
//   let ganttAraay = [];
//     if(!process || !process.length) return [];
//     let currentTime = 0, completed = 0;
//     let n = process.length;
//     if (n == 0) return [];
//     let isCompleted = Array(process.length).fill(0);
//     let burstRemaining = process.map((x) => x.Burst_Time);
  
//     while (completed !== n) {
//       let index = null;
//       let max = Number.MAX_SAFE_INTEGER;
//       // Priority selection 
//       // decides the process with highest priority 
//       for (let i = 0; i < n; i++) {
//         if (process[i].Arrival_Time <= currentTime && isCompleted[i] === 0) {
//           if (process[i].Priority < max) {
//             max = process[i].Priority;
//             index = i;             
//           }
//           if (process[i].Priority === max) {
//             if (process[i].Arrival_Time < process[index].Arrival_Time) {
//               max = process[i].Priority;
//               index = i;
//             }
//           }
//         }
//       }
//       if (index !== null) {
//         if (burstRemaining[index] === process[index].Burst_Time) {
//           // response time is being calculated here
//           process[index].Response_Time = currentTime-process[index].Arrival_Time;
//         }
//         burstRemaining[index] -= 1;
//         currentTime++;
//         ganttAraay.push(index);
//         if (burstRemaining[index] === 0) {
//          // completion time is being calculated here 
//           process[index].Completion_Time = currentTime;
//           // turn around time is being calculated here
//           process[index].TurnAround_Time = process[index].Completion_Time - process[index].Arrival_Time;
//           // waiting time is being calculated here
//           process[index].Waiting_Time = process[index].TurnAround_Time - process[index].Burst_Time;
//           isCompleted[index] = 1;
//           completed++;
//         }
//       } else {
//         currentTime++;
//         ganttAraay.push(index);
//       }
//     }
//     return {process,ganttAraay};
//   } 

// app.post("/schedule", (req,res)=>{
//     // console.log(req.body);
//     const {process,ganttAraay} = priorityScheduling(req.body.process);
//     // let data = priorityScheduling(process);
//     // console.log(data);
//     res.status(200).json({process,ganttAraay})
//     // const myData = new PriorityTable({process});
//     myData.save((err)=>{
//         if(err) return  res.status(500).json({process : [] });
//         return  
//     });
//     // res.sendStatus(200);
// })

// app.listen(8000, (err)=>{
//   if(err) throw err;
//   console.log("App is listening on port 8000");
// })


// require("dotenv").config();
// const mongoose = require("mongoose");
// const PriorityTable = require("./Models/PriorityTable.js")
// const express = require("express");
// const app = express();
// const cors = require("cors");//Cross origin resorce sharing
// app.use(cors());
// // const body = require("body-parser");
// // app.use(body.json());
// app.use(express.json());

// function priorityScheduling(process) {
//   const ganttArray = [];
//     if(!process || !process.length) return [];
//     let currentTime = 0, completed = 0;
//     let n = process.length;
//     if (n == 0) return [];
//     let isCompleted = Array(process.length).fill(0);
//     let prev = 0;
//     let burstRemaining = process.map((x) => x.Burst_Time);
  
//     while (completed !== n) {
//       let index = -1;
//       let max = Number.MAX_SAFE_INTEGER;
// >>>>>>> Stashed changes
//       for (let i = 0; i < n; i++) {
//         if (process[i].Arrival_Time <= currentTime && isCompleted[i] === 0) {
//           if (process[i].Priority < max) {
//             max = process[i].Priority;
//             index = i;
//           }
//           if (process[i].Priority === max) {
//             if (process[i].Arrival_Time < process[index].Arrival_Time) {
//               max = process[i].Priority;
//               index = i;
//             }
//           }
//         }
//       }
//       if (index !== -1) {
//         if (burstRemaining[index] === process[index].Burst_Time) {
// <<<<<<< Updated upstream
//           // response time is being calculated here
// =======
// >>>>>>> Stashed changes
//           process[index].Response_Time = currentTime-process[index].Arrival_Time;
//         }
//         burstRemaining[index] -= 1;
//         currentTime++;
// <<<<<<< Updated upstream
//         ganttAraay.push(index);
//         if (burstRemaining[index] === 0) {
//          // completion time is being calculated here 
//           process[index].Completion_Time = currentTime;
//           // turn around time is being calculated here
//           process[index].TurnAround_Time = process[index].Completion_Time - process[index].Arrival_Time;
//           // waiting time is being calculated here
// =======
//         ganttArray.push(index)
//         console.log(ganttArray);
//         if (burstRemaining[index] === 0) {
//           process[index].Completion_Time = currentTime;
//           process[index].TurnAround_Time = process[index].Completion_Time - process[index].Arrival_Time;
// >>>>>>> Stashed changes
//           process[index].Waiting_Time = process[index].TurnAround_Time - process[index].Burst_Time;
//           isCompleted[index] = 1;
//           completed++;
//         }
//       } else {
//         currentTime++;
//       }
//     }
// <<<<<<< Updated upstream
//     return {process,ganttAraay};
//   } 

// app.post("/schedule", (req,res)=>{
//     // console.log(req.body);
//     const {process,ganttAraay} = priorityScheduling(req.body.process);
// =======
//     return {process,ganttArray};
//   }
  

// app.post("/schedule", (req,res)=>{
//     // console.log(req.body);
//     const {process,ganttArray} = priorityScheduling(req.body.process);
// >>>>>>> Stashed changes
//     // let data = priorityScheduling(process);
//     // console.log(data);
//     const myData = new PriorityTable({process});
//     myData.save((err)=>{
//         if(err) return  res.status(500).json({process : [] });
// <<<<<<< Updated upstream
//         return  res.status(200).json({process,ganttAraay})
// =======
//         return  res.status(200).json({process, ganttArray})
// >>>>>>> Stashed changes
//     });
//     // res.sendStatus(200);
// })

// // app.post("/priority_table", async (req, res) => {
// //   try {
// //     const result = await PriorityTable.findOne(
// //       {},
// //       {},
// //       { sort: { created_at: -1 } }
// //     );
// //     if (!result) return res.status(404).json({ process: [], ganttChart: [] });
// //     return res.status(200).json({ process: result.process, ganttChart: result.ganttChart });
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// mongoose.connect(process.env.mongo, (err) => {
//     if(err) throw err;
//     console.log("App is listening on port 8000");
//   })
// });

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
      let index = null;
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
      if (index !== null) {
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
        console.log("App is listeninfing on port 8000");
    })
})
