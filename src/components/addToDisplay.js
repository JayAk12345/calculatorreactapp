const AddToDisplay = ({ display, setDisplay, num }) => {
  return (
    <div>
      <button
        onClick={() => {
          setDisplay((currentDisplay) => {
            let displayCopy = [...currentDisplay];
            displayCopy.push(num);
            return displayCopy;
          });
        }}
      >
        {num}
      </button>
    </div>
  );
};

export default AddToDisplay;
