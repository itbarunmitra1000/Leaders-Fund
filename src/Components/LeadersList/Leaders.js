import React, { useEffect, useState } from 'react';
import Leader from '../Leader/Leader';
import './Leaders.css'

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    useEffect(() => {
        fetch('./leader.JSON')
            .then(res => res.json())
            .then(data => setLeaders(data));
    }, [])
    return (
        <div className='leaders'>
            <div className='leaders-list '>
                {
                    leaders.map(leader => <Leader leader={leader}></Leader>)
                }
            </div>
            <div>
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Leaders;