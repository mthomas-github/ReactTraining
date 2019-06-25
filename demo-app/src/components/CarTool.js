import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const CarTool = props => {
  const [carForm, change, resetCarForm] = useForm({
    newMake: "",
    newModel: "",
    newYear: 1900,
    newColor: "",
    newPrice: 0
  });
  console.log(carForm);

  const [cars, setCars] = useState(props.cars.concat());
  const newId = Math.max(...cars.map(c => c.id), 0) + 1;

  const addCar = () => {
    setCars(
      cars.concat({
        id: newId,
        make: carForm.newMake,
        model: carForm.newModel,
        year: carForm.newYear,
        color: carForm.newColor,
        price: carForm.newPrice
      })
    );
    resetCarForm();
  };

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Add New Car</h4>
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input
            type="text"
            id="make-input"
            name="newMake"
            value={carForm.newMake}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input
            type="text"
            id="model-input"
            name="newModel"
            value={carForm.newModel}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input
            type="number"
            id="year-input"
            name="newYear"
            value={carForm.newYear}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input
            type="text"
            id="color-input"
            name="newColor"
            value={carForm.newColor}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input
            type="number"
            id="price-input"
            name="newPrice"
            value={carForm.newPrice}
            onChange={change}
          />
        </div>
        <button type="button" onClick={addCar}>
          Add Car
        </button>
      </form>
    </>
  );
};
