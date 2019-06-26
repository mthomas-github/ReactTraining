import React, { useState } from "react";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = props => {
  const [cars, setCars] = useState(props.cars.concat());
  const [editCarId, setEditCarId] = useState(-1);

  const addCar = car => {
    setCars(
      cars.concat({
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1
      })
    );
  };

  const editCar = carId => {
    setEditCarId(carId);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  const editCancel = carId => {
    setEditCarId(-1);
  };

  const editSave = car => {
    const newCars = props.cars.concat();
    console.log(car);
    console.log(newCars);
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={deleteCar}
        onEditCar={editCar}
        onEditCancel={editCancel}
        onEditSave={editSave}
      />
      <h4>Add New Car</h4>
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};
