import { combineReducers } from "redux";
import {
  APPEND_CAR_ACTION,
  REPLACE_CAR_ACTION,
  DELETE_CAR_ACTION,
  CANCEL_CAR_ACTION,
  EDIT_CAR_ACTION,
  REFRESH_CARS_DONE_ACTION,
  REFRESH_CARS_REQUEST_ACTION
} from "./car-tool.actions";

const carsReducer = (state = [], action) => {
  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return action.payload.cars;
    case APPEND_CAR_ACTION:
      return state.concat({
        ...action.payload.car,
        id: Math.max(...state.map(c => c.id), 0) + 1
      });
    case REPLACE_CAR_ACTION:
      const newCars = state.concat();
      newCars[newCars.findIndex(c => c.id === action.payload.car.id)] =
        action.payload.car;
      return newCars;
    case DELETE_CAR_ACTION:
      return state.filter(c => c.id !== action.payload.carId);
    default:
      return state;
  }
};

const editCarIdReducer = (state = -1, action) => {
  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if (
    [
      REFRESH_CARS_REQUEST_ACTION,
      APPEND_CAR_ACTION,
      REPLACE_CAR_ACTION,
      DELETE_CAR_ACTION,
      CANCEL_CAR_ACTION
    ].includes(action.type)
  ) {
    return -1;
  }

  return state;
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer
});
