import React from "react";

function JSX() {
  //* We can move several expreesions into one object, and reference them in our JSX
  const person = {
    name: "Abuzar RaziQ",
    styles: {
      backgroundColor: "crimson",
      color: "whitesomke",
      padding: "20px",
      borderRadius: "5px",
    },
  };

  //* A JavaScript expression will work between curly braces, including function calls.
  const today = new Date();
  const formatDate = function (date) {
    return new Intl.DateTimeFormat("eng-US", {
      weekday: "long",
      // dateStyle: "short",
    }).format(date);
  };
  return (
    <>
      <h1 style={person.styles}>To Do List for {formatDate(today)}</h1>
      <h2>My name is {person.name}</h2>
    </>
  );
}

export default JSX;
