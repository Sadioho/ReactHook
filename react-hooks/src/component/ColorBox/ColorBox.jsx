import React, { useState } from "react";
import "./ColorBox.scss";

// ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["green", "yellow", "red", "blue", "orange"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }
  //   setInterval(handleBoxClick);
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onMouseOver={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
