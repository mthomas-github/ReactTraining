import React from "react";
import { carPropType } from "../PropTypes/car";

export const ViewCarRow = ({ car, onDeleteCar, onEditCar }) => {
  const deleteCar = () => {
    onDeleteCar(car.id);
  };

  const editCar = () => {
    onEditCar(car.id)
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={deleteCar}>
          Delete
        </button>
        <button type="button" onClick={editCar}>
          Edit
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
