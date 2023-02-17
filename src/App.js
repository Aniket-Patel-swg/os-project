import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import SchedulingAlgo from './Pages/SchedulingAlgo.jsx';
import './Css/Homepage.css'

function App() {
  return (
    <div className="App">
         <Routes>
              <Route path='/' element = {<Homepage />}/>
              <Route path='/SchedulingAlgo' element = {<SchedulingAlgo />}/>
         </Routes>
    </div>
  );
}

export default App;
