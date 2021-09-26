import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import './Leader.css';

const Leader = (props) => {
    const { name, age, birth, role, country, salary, img } = props.leader;
    const moneyIcon = <FontAwesomeIcon icon={faMoneyBill} />
    return (
        <div className="leader">
            <div className = 'leader-cart'>
                {/* showing leader data  */}
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h3>Birth: {birth}</h3>
                <h4>Age: {age} </h4>
                <h4>Role: {role}</h4>
                <h4>Salary: $ {salary} </h4>
                <h5>Country: {country}</h5>
                {/* donate button  */}
                <button onClick = {()=>props.addCart(props.leader)} className="donate-btn"> {moneyIcon }&nbsp; &nbsp; Add Donate</button>
            </div>
        </div>
    );
};

export default Leader;