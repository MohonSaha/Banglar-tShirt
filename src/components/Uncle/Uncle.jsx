import React, { useContext } from 'react';
import Cousine from '../Cousine/Cousine';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {

    const [moeny, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Uncleeeeeeeee</h2>
            <p>GrandPa Money: {moeny}</p>
            <button onClick={() => setMoney(moeny + 1000)}>Send 1000</button>
            <section className='flex'>
                <Cousine>Nabil</Cousine>
                <Cousine>Kabil</Cousine>
            </section>
        </div>
    );
};

export default Uncle;