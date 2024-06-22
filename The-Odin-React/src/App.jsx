import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import JSX from "./components/JSX";
import Rendering from "./components/Rendering";
import OtherRendTechs from "./components/Other-Rend-techs";
import Keys from "./components/Keys";
import Properties from "./components/Properties";
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

      {/* Keys Topic */}
      <Keys />
      <Properties />
    </>
  );
}

export default App;
