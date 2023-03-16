import React from 'react';
import './Ball.css';

const Ball = ({ top, left }) => {
  return <div className="ball" style={{ top, left }}></div>;
};

export default Ball;
