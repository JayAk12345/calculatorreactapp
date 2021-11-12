const AddToMemory = ({ display, memoryBlock, memory, setMemory }) => {
  return (
    <div>
      <button
        onClick={() => {
          setMemory((currMemory) => {
            let memoryCopy = { ...currMemory };
            memoryCopy[memoryBlock] = display;
            return memoryCopy;
          });
        }}
      >
        {memoryBlock}:
      </button>
    </div>
  );
};

export default AddToMemory;
