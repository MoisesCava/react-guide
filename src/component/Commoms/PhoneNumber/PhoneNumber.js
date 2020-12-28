import React from "react";





const PhoneNumber = () => (

    <div className="row form-group">
        <div className="col-sm-3 ">
            <label> Prefijo </label>
            <select className="form-control" id="prefijo">
                <option> 0424 </option>
                <option> 0416 </option>
                <option> 0412 </option>
            </select>
        </div>
        <div className="col">
            <label> Teléfono </label>
            <input type="text" id="telefono" className="form-control" required />
            <div className="invalid-feedback"> Este campo es requerido </div>
        </div>
    </div >


)


export default PhoneNumber;