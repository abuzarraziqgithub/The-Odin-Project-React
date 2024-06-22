import React from "react";

/*
! Destructuring props
 * function Button({ text, color, fontSize})
*{
? const buttonStyle = 
? {
? color : color,
? fontSize : fontSize + 'px'
? }

* return <button style={buttonStyle}>{text}</button>

*}
 * 
 */

// function Button(props) {
//   const btnStyle = {
//     color: props.color,
//     backgroundColor: props.backgroundColor,
//     fontSize: props.fontSize + "px",
//   };

//   return (
//     <>
//       <button style={btnStyle}>{props.text}</button>
//     </>
//   );
// }

// function Properties() {
//   return (
//     <>
//       <Button
//         text="Click Here"
//         color="#ffff"
//         backgroundColor="blue"
//         fontSize={50}
//       />
//       <Button
//         text="Launch the Missile"
//         color="#ffff"
//         backgroundColor="crimson"
//         fontSize={50}
//       />
//     </>
//   );
// }

// export default Properties;

//* Applying default values inside function argument
function Circle({
  width = 150,
  height = 150,
  borderRadius = 50,
  text = "Circle",
  backgroundColor = "crimson",
  color = "whitesmoke",
  fontWeight = 700,
}) {
  const circlestyle = {
    width: width + "px",
    height: height + "px",
    borderRadius: borderRadius + "px",
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: fontWeight,
  };
  return <div circleStyle={circlestyle}>{text}</div>;
}

//* Applying Default values to properties to avoid repetition
function Square(props) {
  const squareStyle = {
    width: props.width + "px",
    height: props.height + "px",
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: props.borderRadius + "px",
    display: props.display,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
  };

  return (
    <>
      <p style={squareStyle}>{props.boxContent}</p>
    </>
  );
}
Square.defaultProps = {
  width: 150,
  height: 150,
  backgroundColor: "crimson",
  color: "whitesmoke",
  borderRadius: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxContent: "Box content",
  fontWeight: 700,
};
function Child() {
  return (
    <>
      <Square />
      <Square backgroundColor="blue" />
      <Square backgroundColor="green" />
      <Square backgroundColor="white" color="#000" />
      <Square backgroundColor="indigo" color="#10bbbb" />
      <Circle />
    </>
  );
}

export default Child;
