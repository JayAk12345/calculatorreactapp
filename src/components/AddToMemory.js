import { useState } from "react";

const AddToMemory = ({ display, memoryBlock }) => {
  let [memory, setMemory] = useState({
    m1: [],
    m2: [],
    m3: [],
    m4: []
  })

  return (
    <div>
      <button
        onClick={() => {
          setMemory((currMemory) => {
            let memoryCopy = {...currMemory};
            memoryCopy[memoryBlock] = display;
            return memoryCopy;
          })
        }}
      >
        {memoryBlock}:
      </button>
      {memory[memoryBlock]}
    </div>
  );
};

export default AddToMemory;
