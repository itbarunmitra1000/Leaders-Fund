import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Leader from '../Leader/Leader';
import './Leaders.css'

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    const [cart, setCart] = useState([]);
    // load leader data 
    useEffect(() => {
        fetch('./leader.JSON')
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, [])
    // handle add cart on click 
    const addCart = (leader) => {
        const newCart = [...cart,leader];
        setCart(newCart);
    }
    return (
        <div className='leaders'>
            <div className='leaders-list '>
            {/* pass data in leader component   */}
                {
                   
                    leaders.map(leader => <Leader
                        key={leader.key}
                        leader={leader}
                        addCart={addCart}
                    ></Leader>)
                }

            </div>
            <div>
            {/* passing cart component  */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Leaders;