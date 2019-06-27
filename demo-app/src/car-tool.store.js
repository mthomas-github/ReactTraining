import { createStore, applyMiddleware } from "redux";
import { carToolReducer } from "./car-tool.reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const carToolStore = createStore(
  carToolReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
