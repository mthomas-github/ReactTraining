import React from "react";
import { useNumber } from "../hooks/userNumber";
import PropTypes from "prop-types";

export const CalcTool = ({
  result,
  onAdd: add,
  onSubtract: subtract,
  onMultiply: multiply,
  onDivide: divide
}) => {
  const [num, change] = useNumber(0);

  return (
    <form>
      <div>
        <span>Result:{result}</span>
      </div>
      <div>
        <label htmlFor="inputValue">Input:</label>
        <input
          type="number"
          id="inputValue"
          value={num}
          onChange={change}
          name="newValue"
        />
      </div>
      <button type="button" onClick={() => add(num)}>
        +
      </button>
      <button type="button" onClick={() => subtract(num)}>
        -
      </button>
      <button type="button" onClick={() => multiply(num)}>
        *
      </button>
      <button type="button" onClick={() => divide(num)}>
        /
      </button>
    </form>
  );
};

CalcTool.propTypes = {
  onAddClick: PropTypes.func,
  onSubTractClick: PropTypes.func,
  onMultiplyClick: PropTypes.func,
  onDivideClick: PropTypes.func,
  result: PropTypes.number
};
