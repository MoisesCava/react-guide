import React from "react";

const Password = () => {
  return (
    <div>
      <div className="row form-group text-left">
        <div className="col">
          <label> Contraseña </label>
          <input type="password" className="form-control" required />
          <div className="invalid-feedback"> Este campo es requerido </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
