import React from 'react';

import './Person.css'

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>Soy {props.name} y tengo {props.age} de edad</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
}

export default person; 