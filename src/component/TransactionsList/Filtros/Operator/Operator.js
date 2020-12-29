import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import "./Operator.css"



const Operator = ({ label }) => {



    return (


        <div className="date-input-wrapper">

            <Label for="operador">operador:</Label>
            <Input type="text" name="operador" id="operador" placeholder="operador" />

        </div>

    )


}




export default Operator;