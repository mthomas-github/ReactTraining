import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const ColorTool = (props) => {

    const [ colorForm, change ] = useForm({
        newColor: ''
    });
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
                <input type="text" id="new-color-input" name="newColor" value={colorForm.newColor} onChange={change} />
            </div>
        </form>
    </>;
};