import AddToDisplay from "./addToDisplay";
import AddToMemory from "./AddToMemory";
import { useState } from "react";

const MemoryButtons = ({ display, setDisplay }) => {
  let [memory, setMemory] = useState({
    m1: [],
    m2: [],
    m3: [],
    m4: [],
  });

  return (
    <div className="memory">
      <table id="memoryTable">
        <tr>
          <td>
            <AddToMemory
              display={display}
              memoryBlock={"m1"}
              memory={memory}
              setMemory={setMemory}
            />
            <AddToDisplay
              display={display}
              setDisplay={setDisplay}
              num={memory.m1}
            />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory
              display={display}
              memoryBlock={"m1"}
              memory={memory}
              setMemory={setMemory}
            />
            <AddToDisplay
              display={display}
              setDisplay={setDisplay}
              num={memory.m2}
            />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory
              display={display}
              memoryBlock={"m1"}
              memory={memory}
              setMemory={setMemory}
            />
            <AddToDisplay
              display={display}
              setDisplay={setDisplay}
              num={memory.m1}
            />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory
              display={display}
              memoryBlock={"m1"}
              memory={memory}
              setMemory={setMemory}
            />
            <AddToDisplay
              display={display}
              setDisplay={setDisplay}
              num={memory.m1}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MemoryButtons;
