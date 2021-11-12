import AddToDisplay from "./addToDisplay";
import AddToMemory from "./AddToMemory";

const MemoryButtons = ({ display, setDisplay }) => {
  return (
    <div className="memory">
      <table id="memoryTable">
        <tr>
          <td>
            <AddToMemory display={display} memoryBlock={'M1'} />
            <AddToDisplay display={display} setDisplay={setDisplay} num={5} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory display={display} memoryBlock={'M2'}/>
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory display={display} memoryBlock={'M3'}/>
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory display={display} memoryBlock={'M4'}/>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MemoryButtons;
