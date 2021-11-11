import AddToDisplay from "./addToDisplay";
import ClearDisplay from "./clearDisplay";

const Operations = ({ display, setDisplay }) => {
  return (
    <div>
      <table>
        <tr>
          <td>
            <ClearDisplay display={display} setDisplay={setDisplay} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={"X"} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={"/"} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={"+"} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={"-"} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Operations;
