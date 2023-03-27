import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { newArray } from './FCFSDisk.jsx';



export default class FCFSChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/vertical-line-chart-lvvp9';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={newArray}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
