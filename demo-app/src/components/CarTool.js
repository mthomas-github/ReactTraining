import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = props => {
  const [cars, setCars] = useState(props.cars.concat());

  const addCar = (car) => {
    setCars(
      cars.concat({
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1
      })
    );
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <h4>Add New Car</h4>
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};
