import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import JSX from "./components/JSX";
import Rendering from "./components/Rendering";
function App() {
  return (
    <>
      {/* Greetings Component from the components Topic */}
      <Greeting />
      {/* Component from the JSX Topic */}
      <JSX />
      {/* Component from the Rendering topic */}
      <Rendering />
    </>
  );
}

export default App;
