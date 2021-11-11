const ClearDisplay = ({ display, setDisplay }) => {
  return (
    <div>
      <button onClick={() => {
        setDisplay([])
      }
      }>AC</button></div>
  )
};

export default ClearDisplay;