import React, { useState } from "react";



import "./Amount.css"



const Amount = ({label}) => {



    return (


        <div className="date-input-wrapper">

            <label>{label}</label>
            <input type="number" />

        </div>

    )


}




export default Amount;