import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage.jsx';
import SchedulingAlgo from './Pages/SchedulingAlgo.jsx';
import FCFSNew from './Pages/FCFSNew.jsx';
import './Css/Homepage.css'
import Peterson from './Pages/Peterson';
import OptPR from './Pages/OptPR';
import FinalHomePage from './Pages/FinalHomePage';
// import FCFSDisk from './Pages/FCFSDisk';


function App() {
  return (
    <div className="App">
         <Routes>
              <Route path='/old' element = {<Homepage />}/>
              <Route path='/SchedulingAlgo' element = {<SchedulingAlgo />}/>
              {/* <Route path='/FCFSDisk' element = {<FCFSDisk />}/> */}
              <Route path='/peterson' element={<Peterson />} />
             < Route path='/firstcomefirstserve' element={<FCFSNew />} />
             <Route path='/OptPR' element={<OptPR />} />
             <Route path='/' element={<FinalHomePage />} />
         </Routes>
    </div>
  );
}

export default App;
