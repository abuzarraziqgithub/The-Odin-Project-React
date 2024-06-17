import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import JSX from "./components/JSX";
import Rendering from "./components/Rendering";
import OtherRendTechs from "./components/Other-Rend-techs";
function App() {
  return (
    <>
      {/* Greetings Component from the components Topic file*/}
      <Greeting />
      {/* Component from the JSX Topic file*/}
      <JSX />
      {/* Component from the Rendering Topic file*/}
      {/* <Rendering /> */}

      {/* Component from the file*/}
      <OtherRendTechs />
    </>
  );
}

export default App;
