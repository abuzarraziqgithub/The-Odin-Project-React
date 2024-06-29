import React, { useState } from "react";

//* Therr are native HTML elements that maintain their own internal state like <input>
//* It updates its own value on every keystroke.
//* For many usecases, we would like to control the value of the input element. i.e, set's its value ourself.
//* This is where controlled components come in.
function ControlledComponents() {
  const [value, setValue] = useState("");
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      /* event = { type: "click", target: {value: "current state"}}
       */
    />
  );
}
//* Instead of letting the input maintain it's own state, we define our own state using the useState hook.
//* We then set the value prop to the state variable and update the state variable on every change

//* The pattern is extremely useful whenever we need user input, i.e, typing in a textbox, toggling a checkbox etc.
export default ControlledComponents;
