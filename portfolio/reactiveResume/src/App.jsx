import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Resume from "./components/resume";

function App() {
  return (
    <>
      <div className="masterContainer">
        <div className="container"></div>
        <h1>Reactive Resume</h1>
        <Resume></Resume>
      </div>
    </>
  );
}

export default App;
