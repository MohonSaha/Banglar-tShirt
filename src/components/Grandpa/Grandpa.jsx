import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'


export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {

    const ring = 'diamond';

    const [moeny, setMoney] = useState(0);


    return (
        <div className='grandpa'>
            <h2>Grandpaaaaaaa</h2>
            <p>Has Money: {moeny}</p>

            <MoneyContext.Provider value={[moeny, setMoney]}>
                <RingContext.Provider value='golden-ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>


        </div>
    );
};

export default Grandpa;