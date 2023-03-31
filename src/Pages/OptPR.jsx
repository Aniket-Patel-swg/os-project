//importing necessary modules and css file
import React, { useState } from "react";
import "../Css/OptPR.css";

//Defining the functional Component
function OptPR() {
  //intializing state variables using useState hooks
  const [pageRefrences, SetpageRefrences] = useState([]);
  const [Frames, SetFrames] = useState(0);
  const [componetMemoryState, SetComponentMemoryState] = useState([]);
  const [pageFaults, setPageFaults] = useState(0);
  const [color, setColor] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableHeading, setTableHeading] = useState(false)
  const [pageFaultParagraph, setPageFaultParagraph] = useState(false)
 


  //function to handle page refrence string taken as input
  const HandlePageRefrences = (event) => {
    const refrenceString = event.target.value //converting string to array
      .split("")
      .map((reference) => parseInt(reference.trim()))
      .filter((reference) => !isNaN(reference));
    SetpageRefrences(refrenceString);
  };
  //function to handle changes in number of frames
  const HandleFrames = (event) => {
    const Frames = parseInt(event.target.value);
    SetFrames(Frames);
    SetComponentMemoryState(Array(Frames).fill(null));
  };
  //handling the simulate button
  const HandleSimulate = () => {
    let newTableData = [];
    let pageFaults = 0;
    let componetMemoryState = Array(Frames).fill(null);

    //looping page refrence array
    for (let i = 0; i < pageRefrences.length; i++) {
      const page = pageRefrences[i];

      if (!componetMemoryState.includes(page)) {
        //page not in frame,page fault occurs

        pageFaults++;
        
        
        
        // if there is an empty frame,page added to frame,
        if (componetMemoryState.includes(null)) {
          const index = componetMemoryState.indexOf(null);
          componetMemoryState[index] = page;     
    }
    //if all frames occupied,page with maximum distance to next occurence is replaced
    else {
        let distances = componetMemoryState.map((Frame) => {
          const remainingPages = pageRefrences.slice(i + 1);//a subarray of remaining pages
          const nextIndex = remainingPages.indexOf(Frame);
          return nextIndex === -1 ? Infinity : nextIndex;
         
        });
        const index = distances.indexOf(Math.max(...distances));
        componetMemoryState[index] = page;
      }   
      
      
}


//Adding the page,page fault count and component memory state  to table data array
newTableData.push({
    page: page,
    pageFault: pageFaults,
    memory: [...componetMemoryState],
  });


        }
//updating state variables aftter simulation
     setPageFaults(pageFaults);
    SetComponentMemoryState(componetMemoryState);
    setTableData(newTableData);
    setTableHeading(true)
    setPageFaultParagraph(true)
    }

   

return( //displaying the page
 <>

<div className="optimal-information-section">
        <main>
          <h1>Optimal Page Replacement Algorithm</h1>
          <p>
            {" "}
            Optimal page replacement algorithm replaces the page whose demand in the future is least as compared to other pages from frames. 
          </p>
        </main>
        <div className="optimal-info">
          <h1>Algorithm</h1>
          <p>
            <code>
            The idea is simple, for every reference we do following :
            If referred page is already present, increment hit count.
            If not present, find if a page that is never referenced in future. 
            If such a page exists, replace this page with new page. 
            If no such page exists, find a page that is referenced farthest in future. 
            Replace this page with new page.
            </code>
          </p>
        </div>
        <section>
          <h2>Scroll Down for Simulation</h2>
        </section>
        </div>


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
<div className="table">
  {tableHeading && (
    <table className="table" id="myTable">
      
      <thead>
  <tr>
    <th>Page</th>
    {/* This code displays the frame numbers */}
    {pageRefrences.map((num, index) => ( //to display page refrences in table
      <th key={index}> {num}</th>//key to identify each element in the list
    ))}
    {/* <th>Page Fault</th> */}
  </tr>
</thead>
<tbody>

      
        {/* This code displays the page numbers and their corresponding frames */}
        {tableData[0].memory.map((frame, index) => (
          <tr key={index}>
            <td>Frame {index}</td>
            {tableData.map((row, rowIndex) => (
              <td key={rowIndex} className={
          row.pageFault > tableData[rowIndex - 1]?.pageFault // check if page fault increased
            ? "red"
            : "green"
            
        }
        style={rowIndex === 0 && row.pageFault === 1 ? { backgroundColor: "red" } : {}}>{row.memory[index]}</td> //add ternary here

            ))}
            {/* <td>{tableData[index].pageFaults}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  )}

          <br></br>
          {/* diplaying final results */}
          <div className="totalRef">
            <h3>The total number of refrences are: {pageRefrences.length} </h3>
          </div>
          <br></br>

          <div className="misses">
            <h3>The number of misses are: {pageFaults} </h3>
          </div>
          <br></br>
          <div className="hits">
            <h3>The number of hits are: {pageRefrences.length - pageFaults}</h3>
          </div>
          <br></br>

          <div className="hitRate">
            <h3>
              The Hit Rate is :{" "}
              {((pageRefrences.length - pageFaults) * 100) /
                pageRefrences.length}{" "}
              %
            </h3>
          </div>
          <br></br>
          <div className="missrate">
            <h3>
              The Miss Rate is : {(pageFaults * 100) / pageRefrences.length} %{" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptPR;
