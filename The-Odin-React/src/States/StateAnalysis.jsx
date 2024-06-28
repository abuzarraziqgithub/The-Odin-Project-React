import React, { useState } from "react";

function StateAnalysis() {
  const [person, setPerson] = useState({ name: "Abuzar", age: 20 });

  // * State variables aren't reactive; the component is.
  //* Whenever we call the setState function, React will apply the update in the next component render.
  const handleIncreaseAge = function () {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });

    //* After calling setPerson
    console.log("in handleIncreaseAge (After setPerson call): ", person);
  };
  //* It runs every time the component renders.
  //* It will log the updated rendered value
  console.log("During render: ", person);
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>IncAge</button>
    </>
  );
}

export default StateAnalysis;
