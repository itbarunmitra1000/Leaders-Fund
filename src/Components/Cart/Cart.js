import React from 'react';
import './Cart.css';

const Cart = (props) => {
    

    const {cart} = props;
    console.log(props.cart)
    let total = 0;
    let donarList = [];
    for(const leader of cart){
        total = total + leader.salary;
         donarList = donarList + ' ' + leader.name;
    }
    
    
    return (
        <div className='cart'>
            <h4>Leaders Donate: {cart.length} </h4>
            <h4>Total Add Fund: $ {total}</h4>
            
            <h2 className= 'donarList'>{donarList}</h2>

        </div>
    );
};

export default Cart;