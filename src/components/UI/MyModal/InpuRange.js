import React from 'react';
import './InputRange.css';

const InputRange = ({ children, visible, setVisible }) => {
    return (
        <div>
            <input type="range" list="tickmarks" onInput={task9} ref={a9} />
            <datalist id="tickmarks">
                {device.brands.map(brand =>
                    <option key={brand.id}>{brand.name}</option>
                )
                }
            </datalist>

        </div>
    );
};

export default InputRange;