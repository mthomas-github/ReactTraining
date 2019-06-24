import React from 'react';



export const ColorTool = (props) => {

    return <>
        <header>
            <h1>Color Tool</h1>
        </header>
        <ul>
            {props.colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
        <form>
            <div>
                <label htmlFor="new-color-input">New Color:</label>
                <input type="text" id="new-color-input" value={} onChange={} />
            </div>
        </form>
    </>;
};