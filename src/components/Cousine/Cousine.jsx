import React from 'react';
import Friend from '../Friend/Friend';

const Cousine = ({children, hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousine</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousine;