import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SchedulingAlgo from "./Pages/SchedulingAlgo.jsx";
import FCFSNew from "./Pages/FCFSNew.jsx";
import "./Css/Homepage.css";
import Peterson from "./Pages/Peterson";
import Optimal from "./Pages/Optimal";
import FinalHomePage from "./Pages/FinalHomePage";
// import FCFSDisk from './Pages/FCFSDisk';
import ChatBot from "./Pages/ChatBot.jsx";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {

  const commands = [
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "Open *",
      callback: (pageName) => {
        const destination = pageName.toLowerCase() === "home" || pageName.toLowerCase() === "homepage"
          ? "/"
          : `/${pageName}`;
        window.open(destination, "_self");
      },
    },
    
    {
      command: "go to *",
      callback: (pageName) => {
        const destination = pageName.toLowerCase() === "home" || pageName.toLowerCase() === "homepage"
          ? "/"
          : `/${pageName}`;
        window.open(destination, "_self");
      },
    },    
    {
      command: "Reset",
      callback: (e) => {
       window.location.reload();
      },
    },
    {
      command : "Simulate",
      callback : (e) => {
        window.scrollTo({
          top : 1150,
          behavior : "smooth"
        })
      }
    },
    {
      command : "Scroll to top",
      callback : (e) => {
        window.scrollTo({
          top : 0,
          behavior : "smooth"
        })
      }
    },
    {
      command : "About Team",
      callback : (e) => {
        
        const element = document.querySelector('#team');
        const id = element.getAttribute('id');

        window.scrollTo({
          top: document.querySelector(`#${id}`).offsetTop,
          behavior: 'smooth'
        });
      }
    }
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button
        className="start-btn"
        onClick={SpeechRecognition.startListening({
          continuous: true,
          language: "en-IN",
        })}
      >
        Start
      </button>
      <button className="stop-btn" onClick={SpeechRecognition.stopListening}>
        Stop
      </button>
      <button className="reset-btn" onClick={resetTranscript}>
        Reset
      </button>
      <p>{transcript}</p>
      <Routes>
        <Route path="/SchedulingAlgo" element={<SchedulingAlgo />} />
        {/* <Route path='/FCFSDisk' element = {<FCFSDisk />}/> */}
        <Route path="/peterson" element={<Peterson />} />
        <Route path="/firstcomefirstserve" element={<FCFSNew />} />
        <Route path="/Optimal" element={<Optimal />} />
        <Route path="/" element={<FinalHomePage />} />
        <Route path="/chatbot " element={<ChatBot />} />
      </Routes>
    </div>
  );
}

export default App;
