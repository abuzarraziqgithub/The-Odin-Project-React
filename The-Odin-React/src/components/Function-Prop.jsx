import React from "react";

function Button({
  text = "My github",
  color = "green",
  fontWeight = "800",
  backgroundColor = "yellow",
  handleClick,
  width,
}) {
  const btnStyle = {
    color: color,
    backgroundColor: backgroundColor,
    width: width + "px",
    fontWeight: fontWeight,
  };

  return (
    <>
      <button onClick={handleClick} style={btnStyle}>
        {text}
      </button>
    </>
  );
}

function FunctionProp() {
  const btnClickHandler = () =>
    (window.location.href = "https://www.github.com/abuzarraziqgithub");
  return (
    <>
      <Button handleClick={btnClickHandler} width={120} />
    </>
  );
}

export default FunctionProp;
