import { combineReducers } from "redux";
import {
  APPEND_CAR_ACTION,
  REPLACE_CAR_ACTION,
  DELETE_CAR_ACTION,
  CANCEL_CAR_ACTION,
  EDIT_CAR_ACTION
} from "./car-tool.actions";

const carList = [
  {
    id: 1,
    make: "Tesla",
    model: "S",
    year: 2019,
    color: "Black",
    price: 165000
  },
  { id: 2, make: "Tesla", model: "3", year: 2019, color: "Red", price: 35000 },
  { id: 3, make: "Tesla", model: "X", year: 2019, color: "Blue", price: 100000 }
];

const carsReducer = (state = carList, action) => {
  switch (action.type) {
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
