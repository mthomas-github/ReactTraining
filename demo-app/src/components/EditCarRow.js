import React from "react";
import { useForm } from "../hooks/useForm";
import { carPropType } from "../PropTypes/car";
import { Button, ButtonGroup } from "react-bootstrap";

export const EditCarRow = ({
  car,
  onCancelCar: cancelCar,
  onSaveCar: replaceCar
}) => {
  const [carForm, change] = useForm({
    ...car
  });

  return (
    <tr>
      <td>{car.id}</td>
      <td>
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </td>
      <td>
        <input
          type="text"
          name="model"
          value={carForm.model}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          name="year"
          value={carForm.year}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="text"
          name="color"
          value={carForm.color}
          onChange={change}
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={carForm.price}
          onChange={change}
        />
      </td>
      <td>
        <ButtonGroup>
          <Button
            variant="success"
            onClick={() => replaceCar({ ...carForm, id: car.id })}
            onChange={change}
            type="button"
          >
            Save
          </Button>
          <Button variant="secondary" onClick={cancelCar} type="button">
            Cancel
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
};

EditCarRow.propTypes = {
  car: carPropType
};
