import React from "react";
import PropTypes from "prop-types";
import { ViewCarRow } from "./ViewCarRow";

export const CarTable = ({ cars }) => {
  return (
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
          <ViewCarRow key={car.id} car={car} />
        ))}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: []
};

CarTable.propTypes = {
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
