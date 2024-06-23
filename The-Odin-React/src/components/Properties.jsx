import React from "react";

/*
! Destructuring  * function Button({ text, color, fontSize})
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

// function Button( {
//   const btnStyle = {
//     color: color,
//     backgroundColor: backgroundColor,
//     fontSize: fontSize + "px",
//   };

//   return (
//     <>
//       <button style={btnStyle}>{text}</button>
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
//* Applying Default values to properties to avoid repetition
function Square({
  width = 150,
  height = 150,
  backgroundColor = "crimson",
  color = "whitesmoke",
  borderRadius = 10,
  display = "flex",
  justifyContent = "center",
  alignItems = "center",
  boxContent = "Box content",
  fontWeight = 700,
  margin = "20",
}) {
  const squareStyle = {
    width: width + "px",
    height: height + "px",
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: borderRadius + "px",
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    fontWeight: fontWeight,
    margin: margin + "px",
  };

  return (
    <>
      <div style={squareStyle}>{boxContent}</div>
    </>
  );
}
function Child() {
  return (
    <>
      <Square />
      <Square backgroundColor="blue" />
      <Square backgroundColor="green" />
      <Square backgroundColor="white" color="#000" />
      <Square backgroundColor="indigo" color="#10bbbb" />
    </>
  );
}

export default Child;
