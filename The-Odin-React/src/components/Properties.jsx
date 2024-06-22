import React from "react";

function Button(props) {
  const btnStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    fontSize: props.fontSize + "px",
  };

  return (
    <>
      <button style={btnStyle}>{props.text}</button>
    </>
  );
}

function Properties() {
  return (
    <>
      <Button
        text="Click Here"
        color="#ffff"
        backgroundColor="blue"
        fontSize={50}
      />
      <Button
        text="Launch the Missile"
        color="#ffff"
        backgroundColor="crimson"
        fontSize={50}
      />
    </>
  );
}

export default Properties;
