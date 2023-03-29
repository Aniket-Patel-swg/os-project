
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';
import '../Css/Fcfs.css'

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const value = event.target.value;
    console.log(value);
    setHeadPosition(value);
  };

  const handleDataChange = (event, index) => {
    const newData = [...data];
    const headData = Math.abs(event.target.value);
    newData[index][event.target.name] = event.target.value;
    setHeadPosition(headData);
    setData(newData); 
  };

  const handleAddRow = () => {
    setIsDisabled(true);
    setTrackDisabled(true);
    console.log(setHeadPosition);
    const headData = Math.abs(inputValue);
    if (data.length < numTracks) {
      setData([...data, { data: "" , headPosition : headPosition, requst:`req${i++}` }]);
    }
    else{
      alert('Given number of tracks is not enough')
    }
  };
  

  const handleSimulate = () => {
    console.log(data);
  };

  const handleShowSeekTime = () => {
    let seekTime = 0;
    for (let i = 1; i < data.length ; i++) {
      const prevHeadPosition = parseInt(data[i].headPosition);
      const currentHeadPosition = parseInt(data[i+1].headPosition);
      seekTime += Math.abs(currentHeadPosition - prevHeadPosition);
    }
    setTotalSeekTime(seekTime);
    console.log(seekTime);

    let showField = document.getElementById('seek-time')
    showField.textContent = seekTime;
  };
  const handleTrackDataChange = (event) =>{
    const trackDataByuser = event.target.value;
    setTrackData(trackDataByuser);
    console.log(trackDataByuser);
    setNumTracks(trackDataByuser);

    let trackdiv = document.getElementById('track-number');
    trackdiv.textContent = trackDataByuser;
  }

  let i = 0;
  return (
    <>
    <div className="fcfs">
      <label>
       Initial Head Position:
        <input
          type="text"
          value={inputValue} onChange={handleInputChange} disabled={isDisabled}
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
      <input type="number" name="track" onChange={handleTrackDataChange} placeholder="Enter number of tracks" disabled={trackDisabled} />
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSimulate}>Show output</button>
      <button onClick={handleShowSeekTime}>Show seek time</button>
      <div>Total seek time is : <p id="seek-time">{handleShowSeekTime}</p> </div>
      <div>Selected Number of tracks is : <p id="track-number"></p></div>
    </div>
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
          {/* <Line type="monotone" dataKey="data" stroke="#8884d8" strokeDasharray="5 5" /> */}
          <Line type="monotone" dataKey = "data" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default DynamicTable;
