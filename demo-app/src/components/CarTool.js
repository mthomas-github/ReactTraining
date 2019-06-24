import React from "react";

export const CarTool = () => {

    const carsHeader = [
        'Id', 'Make', 'Model', 'Year', 'Color', 'Price'
    ];

    const cars = [
        {
            id: 'Telsa1',
            make: 'Telsa',
            model: 'Model S',
            year: 2019,
            color: 'Black',
            price: 165000
        },
        {
            id: 'Telsa2',
            make: 'Telsa',
            model: 'Model 3',
            year: 2019,
            color: 'White',
            price: 65000
        }
    ];

    return <>
        <header>
            <h1>Car Tool</h1>
        </header>
        <table>
            <thead>
                <tr>
                    {carsHeader.map((carHeader, index) => <th key={index}>{carHeader}</th>)}
                </tr>
            </thead>
            <tbody>
                {cars.map(car =>
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
    </>;
};