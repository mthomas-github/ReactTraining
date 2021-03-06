import React from "react";
import { ViewCarRow } from "./ViewCarRow";
import { carsPropType } from "../proptypes/car";
import PropTypes from "prop-types";
import { EditCarRow } from "./EditCarRow";
import { Table } from 'react-bootstrap';

export const CarTable = ({
  cars,
  editCarId,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
  onSaveCar: replaceCar
}) => {
  return (
    <Table responsive>
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
            <EditCarRow
              key={car.id}
              car={car}
              onCancelCar={cancelCar}
              onSaveCar={replaceCar}
            />
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
    </Table>
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
