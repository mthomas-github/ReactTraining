import React from "react";
import ReactDOM from 'react-dom';
import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';

ReactDOM.render(
    <div>
    <HelloWorld />
    <CarTool />
    </div>,
    document.querySelector('#root'),
);