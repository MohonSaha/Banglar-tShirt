import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Auntyyyyyyyyy</h2>
            <section className='flex'>
                <Cousine>Abir</Cousine>
                <Cousine hasFriend={true} ring={ring}>Nibir</Cousine>
            </section>
        </div>
    );
};

export default Aunty;