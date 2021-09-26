import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Leader from '../Leader/Leader';
import './Leaders.css'

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./leader.JSON')
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, [])
    const addCart = (leader) => {
        const newCart = [...cart,leader];
        setCart(newCart);
    }
    return (
        <div className='leaders'>
            <div className='leaders-list '>
                {

                    leaders.map(leader => <Leader
                        key={leader.key}
                        leader={leader}
                        addCart={addCart}
                    ></Leader>)
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Leaders;