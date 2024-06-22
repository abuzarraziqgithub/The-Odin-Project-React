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
      <div style={squareStyle}>{props.boxContent}</div>
    </>
  );
}

function Child() {
  return (
    <>
      <Square
        width={150}
        height={150}
        backgroundColor="orangered"
        boxContent="This is my box"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <br />
      <Square
        width={150}
        height={150}
        backgroundColor="#FFF990"
        boxContent="This is my box"
        color="orangered"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <br />
      <Square
        width={150}
        height={150}
        backgroundColor="orangered"
        boxContent="This is my box"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <br />
      <Square
        width={150}
        height={150}
        backgroundColor="#FF0090"
        boxContent="This is my box"
        color="black"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <br />
      <Square
        width={150}
        height={150}
        backgroundColor="#F0222220"
        boxContent="This is my box"
        color="orangered"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <br />
      <Square
        width={150}
        height={150}
        backgroundColor="#FFF990"
        boxContent="This is my box"
        color="orangered"
        borderRadius="5"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <br />
    </>
  );
}

export default Child;
