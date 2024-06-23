import React from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import JSX from "./components/JSX";
import Rendering from "./components/Rendering";
import OtherRendTechs from "./components/Other-Rend-techs";
import Keys from "./components/Keys";
import Child from "./components/Properties";
import FunctionProp from "./components/Function-Prop";
function App() {
  return (
    <>
      {/* Greetings Component from the components Topic file*/}
      <Greeting />
      {/* Component from the JSX Topic file*/}
      <JSX />
      {/* Component from the Rendering Topic file*/}
      <Rendering />
      {/* Component from the file*/}
      <OtherRendTechs />
      {/* Keys Topic */}
      <Keys />
      {/* Props Topic */}
      <Child />
      {/* Props Topic */}
      <FunctionProp />
    </>
  );
}

export default App;
