import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Color from "./colors-Comps/Color.jsx";
// import "./index.css";
import State from "./States/State.jsx";
import StateAnalysis from "./States/StateAnalysis.jsx";
import InfiniteLoopState from "./States/InfiniteLoopState.jsx";
import ControlledComponents from "./States/ControlledComponents.jsx";
import StateUpdater from "./States/StateUpdater.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Color /> */}
    {/* <State /> */}
    {/* <StateAnalysis /> */}
    {/* <InfiniteLoopState /> */}
    <ControlledComponents />
    <StateUpdater />
  </React.StrictMode>
);
