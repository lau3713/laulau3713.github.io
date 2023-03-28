import React, { useState, useEffect } from 'react';
import '../styles/BackgroundStyle.css'

function Bug({ speed, x, y }) {
  const [posX, setPosX] = useState(x);
  const [posY, setPosY] = useState(y);

  useEffect(() => {
    const interval = setInterval(() => {
      const newX = posX + speed;
      const newY = posY + speed / 2;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      // Limiter la position en X
      if (newX > windowWidth) {
        setPosX(-100);
      } else {
        setPosX(newX);
      }
      // Limiter la position en Y
      if (newY > windowHeight) {
        setPosY(-100);
      } else {
        setPosY(newY);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [posX, posY, speed]);

  return <div className="bug" style={{ left: posX, top: posY }} />;
}

export default Bug