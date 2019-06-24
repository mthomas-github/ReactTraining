import React from "react";
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return React.createElement('h1', null, 'Hello World!')
};

ReactDOM.render(
    React.createElement(HelloWorld),
    document.querySelector('#root'),
);