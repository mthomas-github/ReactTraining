import React from "react";
import { ViewCarRow } from "./ViewCarRow";
import { carsPropType } from "../PropTypes/car";
import PropTypes from "prop-types";
import { EditCarRow } from "./EditCarRow";

export const CarTable = ({ cars, onDeleteCar, onEditCar }) => {
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
          !car.isEdit ? (
            <ViewCarRow
              key={car.id}
              car={car}
              onDeleteCar={onDeleteCar}
              onEditCar={onEditCar}
            />
          ) : (
            <EditCarRow key={car.id} car={car} />
          )
        )}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: []
};

CarTable.propTypes = {
  cars: carsPropType,
  onDeleteCar: PropTypes.func.isRequired
};
