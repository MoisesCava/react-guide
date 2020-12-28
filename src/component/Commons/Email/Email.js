import React from "react";

const Email = () => {
  return (
    <div>
      <div className="row form-group text-left">
        <div className="col">
          <label> Correo Electronico </label>
          <input type="email" className="form-control" required />
          <div className="invalid-feedback"> Este campo es requerido </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
