import React from "react";
import ReactDOM from "react-dom";
import { CalcTool } from "./components/CalcTool";

const ADD_ACTION = "ADD_ACTION";
const SUBTRACT_ACTION = "SUBTRACT_ACTION";
const MULTIPLY_ACTION = "MULTIPLY_ACTION";
const DIVIDE_ACTION = "DIVIDE_ACTION";

const createAddAction = value => ({ type: ADD_ACTION, payload: { value } });
const createSubtractAction = value => ({type: SUBTRACT_ACTION,payload: { value }});
const createMultiplyAction = value => ({type: MULTIPLY_ACTION, payload: { value }});
const createDivideAction = value => ({type: DIVIDE_ACTION, payload: { value }})

const calcReducer = (state = 0, action) => {
  console.log("state:", state, "action:", action);

  switch (action.type) {
    case ADD_ACTION:
      return state + action.payload.value;
    case SUBTRACT_ACTION:
      return state - action.payload.value;
    case MULTIPLY_ACTION:
        return state * action.payload.value;
    case DIVIDE_ACTION:
        return state / action.payload.value;
    default:
      return state;
  }
};

const createStore = reducerFn => {
  let currentState = undefined;
  const subscribersFn = [];
  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducerFn(currentState, action);
      subscribersFn.forEach(cb => cb());
    },
    subscribe: cb => {
      subscribersFn.push(cb);
    }
  };
};
const calcStore = createStore(calcReducer);


const bindActionCreators = (actionMap, dispatchFn) => {
  return Object.keys(actionMap).reduce((boundActionMap, actionKey) => {
    boundActionMap[actionKey] = (...params) =>
      dispatchFn(actionMap[actionKey](...params));
    return boundActionMap;
  }, {});
};

const { add, subtract, multiply, divide } = bindActionCreators(
  {
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction
  },
  calcStore.dispatch
);


calcStore.subscribe(() => {
  ReactDOM.render(
    <>
        <CalcTool resultValue={calcStore.getState()} onAdd={add} onSubTract={subtract} onDivide={divide} onMultiply={multiply} />
    </>,
    document.querySelector('#root'),
);
});

add(0);
