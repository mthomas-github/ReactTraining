import React from "react";
import { useForm } from '../hooks/useForm';


export const CarTool = (props) => {

    const [ carForm, change ] = useForm({
        newMake: '',
        newModel: '',
        newYear: '',
        newColor: '',
        newPrice: ''
      });
      console.log(carForm)
    return <>
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
                {props.cars.map(car =>
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>{car.price}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <h4>Add New Car</h4>
        <form>
            <div>
                <label htmlFor="new-make">Make:</label>
                <input type="text" id="new-make" name="newMake" value={carForm.newMake} onChange={change} />
            </div>
            <div>
                <label htmlFor="new-model">Model:</label>
                <input type="text" id="new-model" name="newModel" value={carForm.newModel} onChange={change} />
            </div>
            <div>
                <label htmlFor="new-year">Year:</label>
                <input type="number" id="new-year" name="newYear" value={carForm.newYear} onChange={change} />
            </div>
            <div>
                <label htmlFor="new-color">Color:</label>
                <input type="text" id="new-color" name="newColor" value={carForm.newColor} onChange={change} />
            </div>
            <div>
                <label htmlFor="new-price">Price:</label>
                <input type="number" id="new-price" name="newPrice" value={carForm.newPrice} onChange={change} />
            </div>
        </form>
    </>;
};