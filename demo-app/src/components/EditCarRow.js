import React from "react";
import { useForm } from "../hooks/useForm";

export const EditCarRow = ({ car }) => {

    const [carForm, change ] = useForm({
        ...car
    });

  return (
    <tr>
      <td>
        <input type="number" name="id" value={carForm.id} disabled />
      </td>
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
        <input type="number" name="price" value={carForm.price} onChange={change} />
      </td>
      <td>
        <button type='button'>Save</button>
      </td>
      <td>
        <button type="button">Cancel</button>
      </td>
    </tr>
  );
};
