import { combineReducers } from "redux";
import {
  CANCEL_CAR_REQUEST_ACTION,
  EDIT_CAR_REQUEST_ACTION,
  REFRESH_CARS_DONE_ACTION
} from "./car-tool.actions";

const carsReducer = (state = [], action) => {
  if(action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars
  } else
  {
    return state;
  }
  
};

const editCarIdReducer = (state = -1, action) => {
  if (action.type === EDIT_CAR_REQUEST_ACTION) {
    return action.payload.carId;
  }

  if(action.type.endsWith('Request') || action.type === CANCEL_CAR_REQUEST_ACTION) {
    return -1
  }
  return state;
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer
});
