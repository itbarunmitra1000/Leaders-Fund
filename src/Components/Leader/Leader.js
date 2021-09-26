import React from 'react';
import './Leader.css';

const Leader = (props) => {
    const { name, age, birth, role, country, salary, img } = props.leader;
    return (
        <div className="leader">
            <div>
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h2>Birth: {birth}</h2>
                <h4>Age: {age} </h4>
                <h4>Role: {role}</h4>
                <h4>Salary: {salary} </h4>
                <h5>Country: {country}</h5>
            </div>
        </div>
    );
};

export default Leader;