import React, { useState } from "react";

function State() {
  const [person, setPerson] = useState({ name: "Abuzar", age: 100 });

  //* Changing the state
  //* Bad Practice
  //   const handleIncreaseAgeBad = () => {
  //     //! Mutating the current state object
  //     person.age = person.age + 1;
  //     setPerson(person);
  //   };
  const handleIncreaseAge = () => {
    const newAge = {
      ...person,
      age: person.age + 1,
    };
    setPerson(newAge);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>+</button>
    </>
  );
}
export default State;
