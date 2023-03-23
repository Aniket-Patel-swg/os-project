
import React, { useState } from "react";
import "../Css/OptPR.css";

function OptPR()
{

    const [pageRefrences,SetpageRefrences] = useState([]);
    const [Frames,SetFrames] = useState(0);
    const [componetMemoryState,SetComponentMemoryState] = useState([]);
  const [pageFaults, setPageFaults] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [tableHeading, setTableHeading] = useState(false)
  const [pageFaultParagraph, setPageFaultParagraph] = useState(false)


    const HandlePageRefrences = (event) =>{

        const refrenceString = event.target.value //string to array
        .split("")
        .map((reference) => parseInt(reference.trim()))
        .filter((reference) => !isNaN(reference));
        SetpageRefrences(refrenceString);
    }

    const HandleFrames = (event) => {

        const Frames = parseInt(event.target.value);
        SetFrames(Frames);
       SetComponentMemoryState(Array(Frames).fill(null));

    }

    const HandleSimulate = () =>{
        let newTableData = [];
        let pageFaults = 0;
        let componetMemoryState = Array(Frames).fill(null);

        for (let i = 0; i < pageRefrences.length; i++) {
                  const page = pageRefrences[i];

      if (!componetMemoryState.includes(page)) {
        
        pageFaults++;
        
        if (componetMemoryState.includes(null)) {
          const index = componetMemoryState.indexOf(null);
          componetMemoryState[index] = page;     
    }
    else {
        let distances = componetMemoryState.map((Frame) => {
          const remainingPages = pageRefrences.slice(i + 1);
          const nextIndex = remainingPages.indexOf(Frame);
          return nextIndex === -1 ? Infinity : nextIndex;
         
        });
        const index = distances.indexOf(Math.max(...distances));
        componetMemoryState[index] = page;
      }    
}

newTableData.push({
    page: page,
    pageFault: pageFaults,
    memory: [...componetMemoryState],
  });


        }

     setPageFaults(pageFaults);
    SetComponentMemoryState(componetMemoryState);
    setTableData(newTableData);
    setTableHeading(true)
    setPageFaultParagraph(true)
    }

   

return(
 <>
<div className="Heading" ><h1>Optimal Page Replacement</h1></div>
<div className="Frames">
    <label>
        Number of Frames : 
        <input
          type="Number"
           value={Frames} defaultValue={1}
          onChange={HandleFrames}
        ></input>
        
      </label>
    
</div>
<div className="PageRefrences">
    <label>
        Reference String : 
        <input
          type="Text"
          min="1" defaultValue={1}
          onChange={HandlePageRefrences}
        ></input>
        
      </label>
    
</div>
<div className="btn">
    <button onClick={HandleSimulate}>Simulate</button>
</div>
<div className="table">
{tableHeading &&
      <table className="table" id="myTable">
        <thead>
          <tr>
            <th>Page</th>
            
           
          </tr>
        </thead>
        <tbody>
          {/* This code displays the page numbers and their corresponding frames */}
          {tableData[0].memory.map((Frame, index) => (
  <tr key={index}>
   
//              
    
    <td>Frame {index}</td>
    {tableData.map((row, rowIndex) => (
      <td key={rowIndex}>{row.memory[index]}</td>
    ))}
  </tr>
    ))}
        </tbody>
      </table>}
</div>


</>
);

}; 

export default OptPR;


