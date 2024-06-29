import React, { useState } from "react";

function StateUpdater() {
  const [person, setPerson] = useState({ name: "Abuzar", age: 20 });

  function handleIncreaseAge() {
    // setPerson({ ...person, age: person.age + 1 });
    // setPerson({ ...person, age: person.age + 1 });
    //* It doesn't increase the age by 2.
    //* React batches state updates: There are two setPerson calls in the above example, and from what we've learned so far, a setState call triggers a component re-render.
    //* Whenever we call setState twice withe same values in it, it will trigger and update the component only once not twice.
    //* For different values, setState will trigger the component to update with the second or last setState.

    //* What if we want to update the state multiple times using the latest state(Update twice at once on same values.)?
    //* This is where state updater function comes in.
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));

    setTimeout(() => {
      setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    }, 1000);
    console.log("Loading the next setPerson Call");

    //* When a callback(prevPerson) is passed to the setState function, it ensures that the latest state is passed in as an argument to the callback.
  }
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Inc</button>
    </>
  );
}

export default StateUpdater;
