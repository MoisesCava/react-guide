import React, { useState } from "react";


import "./Fecha.css"



const Fecha = ({label}) => {


    return (

        <div className="date-input-wrapper">
            <label>{label}</label>
            <input  type="date" />

        </div>


    )

}




export default Fecha;