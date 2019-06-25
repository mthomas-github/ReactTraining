import React from "react";
import { ViewCarRow } from "./ViewCarRow";
import { carsPropType } from "../PropTypes/car";
import PropTypes from "prop-types";
import { EditCarRow } from "./EditCarRow";

export const CarTable = ({
  cars,
  editCarId,
  onDeleteCar: deleteCar,
  onEditCar: editCar
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          editCarId === car.id ? (
            <EditCarRow key={car.id} car={car} />
          ) : (
            <ViewCarRow
              key={car.id}
              car={car}
              onDeleteCar={deleteCar}
              onEditCar={editCar}
            />
          )
        )}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: [],
  editCarId: -1
};

CarTable.propTypes = {
  cars: carsPropType,
  editCarId: PropTypes.number,
  onDeleteCar: PropTypes.func.isRequired,
  onEditCar: PropTypes.func
};
