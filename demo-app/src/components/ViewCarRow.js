import React from "react";
import { carPropType } from "../PropTypes/car";

export const ViewCarRow = ({ car, onEditCar: editCar, onDeleteCar: deleteCar }) => {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => editCar(car.id)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

ViewCarRow.defaultProps = {
  deleteButton: "Remove"
};

ViewCarRow.propTypes = {
  car: carPropType
};
