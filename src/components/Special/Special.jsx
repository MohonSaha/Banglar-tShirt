import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const angti = useContext(RingContext);

    return (
        <div>
            <h2>Special</h2>
            <small>{angti}</small>
        </div>
    );
};

export default Special;