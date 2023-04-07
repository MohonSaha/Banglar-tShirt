import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {

    const [moeny, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Sister</h2>
            <p><small>GrandPa Money: {moeny}</small></p>
        </div>
    );
};

export default Sister;