import React from 'react';
import PropTypes from "prop-types";



export const ViewCarRow = ({ cars }) => {
    return (
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
    )
}

ViewCarRow.defaultProps = {
    cars: []
  };
  
  ViewCarRow.propTypes = {
    cars: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        make: PropTypes.string,
        model: PropTypes.string,
        year: PropTypes.number,
        color: PropTypes.string,
        price: PropTypes.number
      })
    )
  };
  