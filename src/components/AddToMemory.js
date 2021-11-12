const AddToMemory = ({ display }) => {
  let saved1;
  return (
    <div>
      <button
        onClick={() => {
          setSaved((currentDisplay) => {
            saved1 = currentDisplay;
            return saved1;
          });
        }}
      >
        M1 {saved1}
      </button>
    </div>
  );
};

export default AddToMemory;
