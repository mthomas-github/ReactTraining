import React from "react";
import ReactDOM from 'react-dom';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorsList = [
    'purple', 'blue', 'green', 'red',
    'pink', 'orange', 'black', 'yellow'
];

const carsList = [
    { id: 1, make: 'Tesla', model: 'S', year: 2019, color: 'Black', price: 165000 },
    { id: 2, make: 'Tesla', model: '3', year: 2019, color: 'White', price: 65000 }
];


ReactDOM.render(
    // <> == <React.Fragment>
    <>
        <ColorTool colors={colorsList} />
        <CarTool cars={carsList} />
    </>,
    document.querySelector('#root'),
);