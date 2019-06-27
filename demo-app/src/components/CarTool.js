import React from "react";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import PropTypes from "prop-types";
import { carsPropType } from '../PropTypes/car';

export const CarTool = ({
  cars,
  editCarId,
  onAddCar: addCar,
  onSaveCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar
}) => {
  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onDeleteCar={deleteCar}
        onEditCar={editCar}
        onSaveCar={replaceCar}
        onCancelCar={cancelCar}
      />
      <CarForm onSubmitCar={addCar} buttonText="Add Car" />
    </>
  );
};

CarTool.defaultProps = {
  cars: [],
  editCarId: -1
};

CarTool.propTypes = {
  cars: carsPropType,
  editCarId: PropTypes.number,
  onDeleteCar: PropTypes.func,
  onEditCar: PropTypes.func,
  onSaveCar: PropTypes.func,
  onCancelCar: PropTypes.func
};
