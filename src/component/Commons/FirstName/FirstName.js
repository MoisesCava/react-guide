import React from "react";

const FirstName = () => {
  return (
    <div>
      <div className="row form-group text-left">
        <div className="col">
          <label> Nombre </label>
          <input type="text" className="form-control" required />
          <div className="invalid-feedback"> Este campo es requerido </div>
        </div>
      </div>
    </div>
  );
};

export default FirstName;
