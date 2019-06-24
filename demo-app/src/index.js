import React from "react";
import ReactDOM from 'react-dom';
import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';

ReactDOM.render(
    // <> == <React.Fragment>
    <>
    <HelloWorld />
    <CarTool />
    </>,
    document.querySelector('#root'),
);