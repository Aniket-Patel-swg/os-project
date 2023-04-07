import React from 'react';
import './Ball.css';

// const Ball = ({ top, left }) => {
//   return <div className="ball" style={{ top, left }} ></div>;
// };

// const Ball = ({ top, left }) => {
//   return (
//     <div className="ball" style={{ top, left }}>
//       <span style={{ color: 'white' }}>P1</span>
//     </div>
//   );
// };

const Ball = ({ top, left, text }) => {
  return (
    <div className="ball" style={{ top, left }}>
      <span style={{ color: 'white' }}>{text}</span>
    </div>
  );
};

export default Ball;
