import React from "react";
import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const CalcTool = ({
  resultValue,
  onAdd: add,
  onSubTract: subtract,
  onMultiply: multiply,
  onDivide: divide
}) => {
  const [calcForm, change] = useForm({
    newValue: 0
  });

  return (
    <form>
      <div>
        <span>Result:{resultValue}</span>
      </div>
      <div>
        <label htmlFor="inputValue">Input:</label>
        <input
          type="number"
          id="inputValue"
          value={calcForm.newValue}
          onChange={change}
          name="newValue"
        />
      </div>
      <button type="button" onClick={() => add(calcForm.newValue)}>
        +
      </button>
      <button type="button" onClick={() => subtract(calcForm.newValue)}>
        -
      </button>
      <button type="button" onClick={() => multiply(calcForm.newValue)}>
        *
      </button>
      <button type="button" onClick={() => divide(calcForm.newValue)}>
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
  newValue: PropTypes.number
};
