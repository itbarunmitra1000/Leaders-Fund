import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(props.cart)
    let total = 0;
    for(const leader of cart){
        total = total + leader.salary;
    }
    return (
        <div className='cart'>
            <h3>Leaders Added: {cart.length} </h3>
            <h3>Total Add Fund: {total}</h3>
        </div>
    );
};

export default Cart;