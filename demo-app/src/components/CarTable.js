import React from "react";
import PropTypes from "prop-types";

import { ViewCarRow } from './ViewCarRow';

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
      <ViewCarRow cars={cars} />
    </table>
  );
};
