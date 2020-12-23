import React from 'react';

const UserOutput = (props) =>{
    return(
        <div>
            <p>Esto es el parrafo nro 1 de la tarea</p>
            <p>Esto es el parrafo nro 2 de la tarea y pertenece a {props.name}</p>
        </div>
    );
}

export default UserOutput;