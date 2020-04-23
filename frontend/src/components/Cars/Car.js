import React from 'react';

const Car = ({ brand, model, year }) => {
    return (
        <li >
            <ul>
                <li>
                    Brand: {brand}
                </li>
                <li>
                    Model: {model}
                </li>
                <li>
                    Year: {year}
                </li>
            </ul>
        </li>
    )
}

export default Car; 