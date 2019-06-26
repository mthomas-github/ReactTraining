import React from "react";
import { useForm } from "../hooks/useForm";
import { carPropType } from "../PropTypes/car";

export const EditCarRow = ({ car, onEditCancel: cancelEdit, onEditSave: saveEdit }) => {
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
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </td>
      <td>
        <input type="number" name="year" value={carForm.year} onChange={change} />
      </td>
      <td>
        <input type="text" name="color" value={carForm.color} onChange={change} />
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
        <button onClick={() => saveEdit({...carForm, id: car.id})} onChange={change} type="button">
          Save
        </button>
        <button onClick={cancelEdit} type="button">
          Cancel
        </button>
      </td>
    </tr>
  );
};

EditCarRow.propTypes = {
  car: carPropType
};
