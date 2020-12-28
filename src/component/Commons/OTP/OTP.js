import React from "react";


const OTP = () => (

    <div className="row form-group text-left">
        <div className="col">
            <label> OTP </label>
            <input type="password" className="form-control" required />
            <div className="invalid-feedback"> Este campo es requerido </div>
        </div>
    </div>

)

export default OTP;