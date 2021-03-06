import "./App.css";
import Numbers from "./components/numbers";
import Operations from "./components/operations";
import Display from "./components/display";
import { useState } from "react";
import MemoryButtons from "./components/memoryButtons.js";

function App() {
  const [display, setDisplay] = useState([]);
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display display={display} />
      <Operations display={display} setDisplay={setDisplay} />

      <div className="lowerSection">
        <MemoryButtons display={display} setDisplay={setDisplay} />
        <Numbers display={display} setDisplay={setDisplay} />
      </div>
    </div>
  );
}

export default App;

//add functionality for multiple operations 5+5/6
// add additional operations
// prevent use of operations incorrectly eg XX+
