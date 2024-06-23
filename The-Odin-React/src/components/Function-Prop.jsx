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
      <button
        onClick={() => handleClick("https://www.github.com/abuzarraziqgithub")}
        style={btnStyle}
      >
        {text}
      </button>
    </>
  );
}

function FunctionProp() {
  const btnClickHandler = (url) => (window.location.href = url);
  return (
    <>
      <Button handleClick={btnClickHandler} width={120} />
    </>
  );
}

export default FunctionProp;
