import React from "react";
import ReactDOM from "react-dom";
import { CalcTool } from "./components/CalcTool";
import { createStore, bindActionCreators } from "redux";
import { connect, Provider } from 'react-redux';

const ADD_ACTION = "ADD_ACTION";
const SUBTRACT_ACTION = "SUBTRACT_ACTION";
const MULTIPLY_ACTION = "MULTIPLY_ACTION";
const DIVIDE_ACTION = "DIVIDE_ACTION";

const createAddAction = value => ({
  type: ADD_ACTION,
  payload: { value }
});
const createSubtractAction = value => ({
  type: SUBTRACT_ACTION,
  payload: { value }
});
const createMultiplyAction = value => ({
  type: MULTIPLY_ACTION,
  payload: { value }
});
const createDivideAction = value => ({
  type: DIVIDE_ACTION,
  payload: { value }
});

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

const calcStore = createStore(calcReducer);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onAdd: createAddAction,
      onSubtract: createSubtractAction,
      onMultiply: createMultiplyAction,
      onDivide: createDivideAction
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    result: state
  };
};

// const { Provider, Consumer } = React.createContext(null);

// const connect = (mapStateToPropsFn, mapDispatchToPropsFn) => {
//   return PresentationalComponent => {
//     class ContainerComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.dispatchToPropsMap = mapDispatchToPropsFn(props.store.dispatch);
//       }
//       componentDidMount() {
//         this.unsubscribeStore = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribeStore();
//       }

//       render() {
//         const stateToPropsMap = mapStateToPropsFn(this.props.store.getState());
//         return (
//           <PresentationalComponent
//             {...stateToPropsMap}
//             {...this.dispatchToPropsMap}
//           />
//         );
//       }
//     }
//     return () => (
//       <Consumer>{value => <ContainerComponent store={value} />}</Consumer>
//     );
//   };
// };

const createCalcToolContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

const CalcToolContainer = createCalcToolContainer(CalcTool);

ReactDOM.render(
  <Provider store={calcStore}>
    <CalcToolContainer />
  </Provider>,
  document.querySelector("#root")
);

// const dispatchToPropsMap = mapDispatchToProps(calcStore.dispatch);

// calcStore.subscribe(() => {
//   const stateToPropsMap = mapStateToProps(calcStore.getState());

//   ReactDOM.render(
//     <CalcTool {...stateToPropsMap} {...dispatchToPropsMap} />,
//     document.querySelector("#root")
//   );
// });

// dispatchToPropsMap.onAdd(0);

// const createStore = reducerFn => {
//   let currentState = undefined;
//   const subscribersFn = [];
//   return {
//     getState: () => currentState,
//     dispatch: action => {
//       currentState = reducerFn(currentState, action);
//       subscribersFn.forEach(cb => cb());
//     },
//     subscribe: cb => {
//       subscribersFn.push(cb);
//     }
//   };
// };

// const bindActionCreators = (actionMap, dispatchFn) => {
//   return Object.keys(actionMap).reduce((boundActionMap, actionKey) => {
//     boundActionMap[actionKey] = (...params) =>
//       dispatchFn(actionMap[actionKey](...params));
//     return boundActionMap;
//   }, {});
// };
