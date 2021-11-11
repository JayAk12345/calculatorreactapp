import "./App.css";
import Numbers from "./components/numbers";
import Operations from "./components/operations";
import Display from "./components/display";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState([]);
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display display={display} />
      <Operations />
      <Numbers display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
