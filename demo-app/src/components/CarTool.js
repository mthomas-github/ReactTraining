import React from "react";

export const CarTool = () => {
    // JSX Syntax
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
                <tr>
                    <td>1</td>
                    <td>Telsa</td>
                    <td>Model S</td>
                    <td>2019</td>
                    <td>Black</td>
                    <td>$165,000</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Telsa</td>
                    <td>Model 3</td>
                    <td>2019</td>
                    <td>White</td>
                    <td>$60,000</td>
                </tr>
            </tbody>
        </table>
    </>;
};