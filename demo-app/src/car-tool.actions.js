export const REFRESH_CARS_REQUEST_ACTION =
  "[CarTool] Refresh Cars Request Action";
export const REFRESH_CARS_DONE_ACTION = "[CarTool] Refresh Cars Done Action";
export const EDIT_CAR_ACTION = "[CarTool] Edit Car Action";
export const APPEND_CAR_REQUEST_ACTION = "[CarTool] Append Car Request Auction";
export const APPEND_CAR_DONE_ACTION = "[CarTool] Append Car Done Auction";
export const REPLACE_CAR_REQUEST_ACTION =
  "[CarTool] Replace Car Request Auction";
export const REPLACE_CAR_DONE_ACTION = "[CarTool] Replace Car Done Auction";

export const CANCEL_CAR_ACTION = "[CarTool] Cancel CarAction";
export const DELETE_CAR_REQUEST_ACTION = "[CarTool] Delete Car Request Action";
export const DELETE_CAR_DONE_ACTION = "[CarTool] Delete Car Done Action";

export const createAppendCarRequestAction = car => ({
  type: APPEND_CAR_REQUEST_ACTION,
  payload: { car }
});

export const createAppendCarDoneAction = car => ({
  type: APPEND_CAR_DONE_ACTION,
  payload: { car }
});

export const createRefreshCarsRequestAction = () => ({
  type: REFRESH_CARS_REQUEST_ACTION
});

export const createRefreshCarsDoneAction = cars => ({
  type: REFRESH_CARS_DONE_ACTION,
  payload: { cars }
});

export const createReplaceCarRequestAction = car => ({
  type: REPLACE_CAR_REQUEST_ACTION,
  payload: { car }
});

export const createReplaceCarDoneAction = car => ({
  type: REPLACE_CAR_DONE_ACTION,
  payload: { car }
});

export const createDeleteCarRequestAction = carId => ({
  type: DELETE_CAR_REQUEST_ACTION,
  payload: { carId }
});
export const createDeleteCarDoneAction = car => ({
  type: DELETE_CAR_DONE_ACTION,
  payload: { car }
});

export const createEditCarAction = carId => ({
  type: EDIT_CAR_ACTION,
  payload: { carId }
});

export const createCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION
});

// thunk creator
export const refreshCars = () => {
  // thunk (invoked by think middleware)
  return dispatch => {
    // dispatching of the first action (first task)
    dispatch(createRefreshCarsRequestAction());
    return (
      fetch("http://localhost:3050/cars")
        .then(res => res.json())
        // dispatching of the second action (second task)
        .then(cars => dispatch(createRefreshCarsDoneAction(cars)))
    );
  };
};

export const appendCar = car => {
  return dispatch => {
    dispatch(createAppendCarRequestAction(car));
    return fetch("http://localhost:3050/cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car)
    })
      .then(res => res.json())
      .then(car => dispatch(createAppendCarDoneAction(car)))
      .then(() => dispatch(refreshCars()));
  };
};

export const replaceCar = car => {
  return dispatch => {
    dispatch(createReplaceCarRequestAction(car));
    return fetch("http://localhost:3050/cars/" + encodeURIComponent(car.id), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car)
    })
      .then(res => res.json)
      .then(dispatch(createRefreshCarsDoneAction))
      .then(() => dispatch(refreshCars()));
  };
};

export const deleteCar = carId => {
  return dispatch => {
    dispatch(createDeleteCarRequestAction(carId));
    return fetch("http://localhost:3050/cars/" + encodeURIComponent(carId))
      .then(res => res.json())
      .then(carToDelete => {
        return fetch(
          "http://localhost:3050/cars/" + encodeURIComponent(carId),
          {
            method: "DELETE"
          }
        ).then(() => dispatch(createDeleteCarDoneAction(carToDelete)));
      })
      .then(() => dispatch(refreshCars()));
  };
};
