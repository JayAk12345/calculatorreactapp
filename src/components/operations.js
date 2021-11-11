import AddToDisplay from "./addToDisplay";

const Operations = ({ display, setDisplay }) => {
  return (
    <div>
      <table>
        <tr>
          <td>AC</td>
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
