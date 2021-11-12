const Calculate = ({ display, setDisplay }) => {
  return (
    <div>
      <button
        onClick={() => {
          const separatedComps = splitDisplay(display);
          setDisplay(calc(separatedComps));
        }}
      >
        =
      </button>
    </div>
  );
};

export default Calculate;

const splitDisplay = (display) => {
  const firstNum = [];
  let ops = "";

  for (let i = 0; i < display.length; i++) {
    if (typeof display[i] === "number") {
      firstNum.push(display[i]);
    } else if (display[i] === ".") {
      firstNum.push(display[i]);
    } else {
      ops = display[i];
      break;
    }
  }

  let secondNum = display.slice(display.indexOf(ops) + 1);
  const parsedFirstNum = parseFloat(firstNum.join(""));
  const parsedSecondNum = parseFloat(secondNum.join(""));
  let seperateComps = [parsedFirstNum, ops, parsedSecondNum];
  return seperateComps;
};

const calc = ([parsedFirstNum, ops, parsedSecondNum]) => {
  let answer = 0;
  if (ops === "+") {
    answer += parsedFirstNum + parsedSecondNum;
  }
  if (ops === "-") {
    answer += parsedFirstNum - parsedSecondNum;
  }
  if (ops === "/") {
    answer += parsedFirstNum / parsedSecondNum;
  }
  if (ops === "X") {
    answer += parsedFirstNum * parsedSecondNum;
  }
  if (ops === "^") {
    answer += Math.pow(parsedFirstNum, parsedSecondNum);
  }
  if (ops === "%") {
    answer += (parsedFirstNum * parsedSecondNum) / 100;
  }
  return answer;
};
