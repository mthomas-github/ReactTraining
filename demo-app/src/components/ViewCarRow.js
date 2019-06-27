import React from "react";
import { carPropType } from "../PropTypes/car";
import { Button, ButtonGroup } from "react-bootstrap";

export const ViewCarRow = ({
  car,
  onEditCar: editCar,
  onDeleteCar: deleteCar
}) => {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <ButtonGroup>
          <Button variant="info" type="button" onClick={() => editCar(car.id)}>
            Edit
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={() => deleteCar(car.id)}
          >
            Delete
          </Button>
        </ButtonGroup>
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
