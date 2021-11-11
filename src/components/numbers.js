import AddToDisplay from "./addToDisplay";
import Calculate from "./Calculate";

const Numbers = ({ display, setDisplay }) => {
  return (
    <div id="numbersTable">
      <table>
        <tr>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={7} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={8} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={9} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={4} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={5} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={6} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={1} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={2} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={3} />
          </td>
        </tr>
        <tr>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={0} />
          </td>
          <td>
            <AddToDisplay display={display} setDisplay={setDisplay} num={"."} />
          </td>
          <td>
            <Calculate display={display} setDisplay={setDisplay} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Numbers;
