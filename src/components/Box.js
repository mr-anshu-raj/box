import React, { useState } from 'react';
import './Box.css';

const Box = () => {
  const boxWidth = 500;
  const boxHeight = 500;
  const squareSize = 50;
  const defaultIntensity = 1;
  const disabledIntensity = 0.5;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [intensities, setIntensities] = useState({
    up: disabledIntensity,
    down: defaultIntensity,
    left: disabledIntensity,
    right: defaultIntensity
  });

  const handleMove = (direction) => {
    let newX = position.x;
    let newY = position.y;
    let newIntensities = { ...intensities };

    switch (direction) {
      case 'up':
        newY = Math.max(0, newY - squareSize);
        newIntensities.up = newY === 0 ? disabledIntensity : defaultIntensity;
        newIntensities.down = newY === boxHeight - squareSize ? disabledIntensity : defaultIntensity;
        console.log(newX , newY);
        break;
      case 'down':
        newY = Math.min(boxHeight - squareSize, newY + squareSize);
        newIntensities.up = newY === 0 ? disabledIntensity : defaultIntensity;
        newIntensities.down = newY === boxHeight - squareSize ? disabledIntensity : defaultIntensity;
        break;
      case 'left':
        newX = Math.max(0, newX - squareSize);
        newIntensities.left = newX === 0 ? disabledIntensity : defaultIntensity;
        newIntensities.right = newX === boxWidth - squareSize ? disabledIntensity : defaultIntensity;
        break;
      case 'right':
        newX = Math.min(boxWidth - squareSize, newX + squareSize);
        newIntensities.left = newX === 0 ? disabledIntensity : defaultIntensity;
        newIntensities.right = newX === boxWidth - squareSize ? disabledIntensity : defaultIntensity;
        break;
      default:
        break;
    }
    if (newIntensities.up === defaultIntensity && newIntensities.down === defaultIntensity &&
      newIntensities.left === defaultIntensity && newIntensities.right === defaultIntensity) {
      newIntensities[direction] = defaultIntensity;
    }

    setPosition({ x: newX, y: newY });
    setIntensities(newIntensities);
  };

  return (
    <div className="Main" tabIndex={0}>
      <div className="box">
        <div className="up" onClick={() => handleMove('up')}>
          <p style={{ opacity: intensities.up }}>up</p>
        </div>
        <div className="down" onClick={() => handleMove('down')}>
        <p style={{ opacity: intensities.down }}>down</p>
        </div>
        <div className="left" onClick={() => handleMove('left')}>
        <p style={{ opacity: intensities.left }}>left</p>
        </div>
        <div className="right" onClick={() => handleMove('right')}>
        <p style={{ opacity: intensities.right }}>right</p>
        </div>
        <div
          className="square"
          style={{ top: position.y, left: position.x }}
        ></div>
      </div>
    </div>
  )
}

export default Box
