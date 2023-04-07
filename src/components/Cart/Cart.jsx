import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // console.log(cart);

    let message;
    if(cart.length == 0){
        message = <p>Please add some product</p>
    }
    else{
        message = <div>
            <h3>Borolokxxx</h3>
            <p><small>Thanks for shopping</small></p>
        </div>
    }

    return (
        <div>

            {/* Conditional css Class Rule:1 */}

            <h2 className= {cart.length == 0 ? 'red' : 'green'} >Order Summary : {cart.length} </h2>


            {/* Conditional css Class Rule:2 */}

            <p className={`bold orange ${cart.length === 4 ? 'yellow' : ''}`}>Conditional css class</p>

            
            {message}


            {cart.length > 3 ? <span className='orange'>Aro kino</span> : <span className='red'>Gorib hala</span>}


            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }

            {
                cart.length === 3 && <h3>Take Triple product offer!!!</h3>  //Logical and
            }

            {
                cart.length === 3 || <h3>Select 3 item and get offer!!!</h3>
            }
        </div>
    );
};

export default Cart;


/*

Conditional rendering: 


*/