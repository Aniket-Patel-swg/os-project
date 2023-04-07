
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Pie,
  PieChart,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../Css/Fcfs.css";

function DynamicTable() {
  const [headPosition, setHeadPosition] = useState("");
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [trackDisabled, setTrackDisabled] = useState(false);
  const [totalSeekTime, setTotalSeekTime] = useState(0);
  const [trackData, setTrackData] = useState(0);
  const [numTracks, setNumTracks] = useState(0);
  
  


  const handleHeadPositionChange = (event) => {
    setHeadPosition(event.target.value);
  };

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  //   const value = event.target.value;
  //   console.log(value);
  //   setHeadPosition(value);
  // };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
      setHeadPosition(value);
    }
  };

  // const handleDataChange = (event, index) => {
  //   const newData = [...data];
  //   const headData = Math.abs(event.target.value);
  //   newData[index][event.target.name] = event.target.value;
  //   setHeadPosition(headData);
  //   setData(newData);
  // };

  const handleDataChange = (event, index) => {
    const newData = [...data];
    const headData = Math.abs(event.target.value);
    const value = event.target.value;
    if (!/^\d*$/.test(value)) return;
    newData[index][event.target.name] = value;
    setHeadPosition(headData);
    setData(newData);
  };

  const handleAddRow = () => {
    setIsDisabled(true);
    setTrackDisabled(true);
    console.log(setHeadPosition);
    const headData = Math.abs(inputValue);
    if (data.length < numTracks) {
      setData([
        ...data,
        { data: "", headPosition: headPosition, requst: `req${i++}` },
      ]);
    } else {
      alert("Given number of tracks is not enough");
    }

  };

  const handleSimulate = () => {
    console.log(data);
  };

  const handleShowSeekTime = () => {
    if (data.length < 2) {
      console.error("Data array should have at least two elements");
      return;
    }
    console.log(data);
    let seekTime = 0;
    // This function will calculate
    for (let i = 1; i < data.length; i++) {
      const prevHeadPosition = parseInt(data[i - 1].headPosition);
      const currentHeadPosition = parseInt(data[i].headPosition);
      seekTime += Math.abs(currentHeadPosition - prevHeadPosition);
    }
    setTotalSeekTime(seekTime);

    let showField = document.getElementById("seek-time");
    showField.textContent = seekTime;
  };
  const handleTrackDataChange = (event) => {
    const trackDataByuser = event.target.value;
    setTrackData(trackDataByuser);
    console.log(trackDataByuser);
    setNumTracks(trackDataByuser);

    let trackdiv = document.getElementById("track-number");
    trackdiv.textContent = trackDataByuser;
  };

  let i = 0;
  return (
    <>
      <div className="information-section">
        <main>
          <h1>First Come First Serve Disc Scheduling</h1>
          <p> FCFS disk scheduling processes disk requests in the order they are received, without any optimization.</p>
        </main>
        <div className="info" >
          <h1>Algorithm</h1>
          <p>
            <code>
              <ul className="bullet-points" >
                <li>Let Request array represents an array storing indexes of tracks that have been requested in ascending order of their time of arrival. ‘head’ is the position of disk head.</li>
                <li>Let us one by one take the tracks in default order and calculate the absolute distance of the track from the head.</li>
                <li>Increment the total seek count with this distance</li>
                <li>Currently serviced track position now becomes the new head position.</li>     
                <li>Go to step 2 until all tracks in request array have not been serviced.</li>        
              </ul>
            </code>
          </p>
          
        </div>
        {/* <section>
          <h2>Scroll Down for Simulation</h2>
        </section> */}
      </div>
      <div className="fcfs">
        <label>
          Initial Head Position:(Enter only numeric values)
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            disabled={isDisabled}
          />
        </label>
        <table>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Data</th>
              <th>Head Position</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, numTracks).map((row, index) => (
              <tr key={index}>
                <td>request{i++}</td>
                <td>
                  <input
                    type="text"
                    name="data"
                    value={row.data}
                    onChange={(event) => handleDataChange(event, index)}
                  />
                </td>
                <td>{row.headPosition}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <input
          type="number"
          name="track"
          onChange={handleTrackDataChange}
          placeholder="Enter number of tracks"
          disabled={trackDisabled}
        />
        <button onClick={handleAddRow} >Add Row</button>
        {/* <button onClick={handleSimulate}>Show output</button> */}
        <button onClick={handleShowSeekTime}>Show seek time</button>
        <div>
          Total seek time is : <div className="seektime" id="seek-time">{handleShowSeekTime}</div>{" "}
        </div>
        <div>
          Selected Number of tracks is : <div classname="tracks" id="track-number"></div>
        </div>
      </div>
      <div className="chart-container">
      <ResponsiveContainer width="100%" height="500%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="requst" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="request" dataKey="requst" domain={[0, 'dataMax + 1000']} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="data" type="monotone" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer> */}
      </div>
    </>
  );
}

export default DynamicTable;
