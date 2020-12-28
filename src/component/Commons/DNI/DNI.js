import React from "react";




const DNI = () => <div className="row form-group">
    <div className="col-sm-3">
        <label> Cédula o RIF </label>
        <select className="form-control" id="id_tipo">
            <option> V </option>
            <option> E </option>
            <option> RIF </option>
        </select>
    </div>
    <div className="col">
        <label> Documento de identificación </label>
        <input type="text" id="identificacion" className="form-control" required />
        <div className="invalid-feedback"> Este campo es requerido </div>
    </div>
</div>





export default DNI;