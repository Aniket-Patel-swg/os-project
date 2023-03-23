
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,Pie, PieChart, Legend, ResponsiveContainer } from 'recharts';

function DynamicTable() {
  const [headPosition, setHeadPosition] = useState("");
  const [data, setData] = useState([]);

  const handleHeadPositionChange = (event) => {
    setHeadPosition(event.target.value);
  };

  const handleDataChange = (event, index) => {
    const newData = [...data];
    const headData = Math.abs(headPosition - event.target.value);
    newData[index][event.target.name] = event.target.value;
    setHeadPosition(headData);
    setData(newData);
    
  };

  const handleAddRow = () => {
    setData([...data, { data: "", headPosition : headPosition,requst:`req${i++}` }]);
  };

  const handleSimulate = () => {
    console.log(data);
  };
  let i = 0;
  return (
    <>
    <div>
      <label>
        Head Position:
        <input
          type="text"
          value={headPosition}
          onChange={handleHeadPositionChange}
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
          {data.map((row, index) => (
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
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSimulate}>Simulate</button>
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
          <Line type="monotone" dataKey="data" stroke="#8884d8" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="data"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default DynamicTable;
