import React, { useState } from "react";
import "./Color.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function Color() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  //* It takes initialValue as a parameter and returns an array of two elements.
  //* const [currentStateValue, setStateValue] = useState(initialValue)
  const onButtonClick = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <div style={{ backgroundColor }} className="ParentDiv">
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={() => onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
}

export default Color;
