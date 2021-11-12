import AddToMemory from "./AddToMemory";

const MemoryButtons = ({ display }) => {
  return (
    <div className="memory">
      <table id="memoryTable">
        <tr>
          <td>
            <AddToMemory display={display} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory display={display} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory display={display} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToMemory display={display} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MemoryButtons;
