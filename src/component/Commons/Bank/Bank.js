import React from "react";

const Bank = () => (

    <div className="row form-group text-left">
        <div className="col">
            <label> Banco receptor </label>
            <select className="form-control" id="banco">
                <option> Banesco </option>
                <option> Mercantil </option>
                <option> Provincial </option>
                <option> Banco de Venezuela </option>
            </select>
        </div>
    </div>

)

export default Bank;