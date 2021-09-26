import React from 'react';
import './Cart.css';

const Cart = (props) => {
    

    const {cart} = props;
    // console.log(props.cart)
    let total = 0;

    // add donar list and total fund
    let donarList = [];
    for(const leader of cart){
        total = total + leader.salary;
         donarList = donarList + ' ' + leader.name;
    }
    
    
    return (
        <div className='cart'>
        {/* total leaders and total money  */}
            <h4>Total Leaders: {cart.length} </h4>
            <h4>Total Add Fund: $ {total}</h4>
            
            <h2 className= 'donarList'>{donarList}</h2>

        </div>
    );
};

export default Cart;