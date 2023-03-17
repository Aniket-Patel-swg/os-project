import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import SchedulingAlgo from './Pages/SchedulingAlgo.jsx';
import './Css/Homepage.css'
import FCFS from './Pages/FCFS';
import Peterson from './Pages/Peterson';

function App() {
  return (
    <div className="App">
         <Routes>
              <Route path='/' element = {<Homepage />}/>
              <Route path='/SchedulingAlgo' element = {<SchedulingAlgo />}/>
              {/* <Route path='/fcfs' element = {<FirstComeFirstServe />}/> */}
              <Route path='/fcfs' element = {<FCFS />} />
              <Route path='/peterson' element={<Peterson />} />
         </Routes>
    </div>
  );
}

export default App;
