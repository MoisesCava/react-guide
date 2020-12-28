import React from "react";
import PhoneNumber from "../Commons/PhoneNumber/PhoneNumber";
import Bank from "../Commons/Bank/Bank";
import DNI from "../Commons/DNI/DNI";
const Refund = (props) => {
  return (
    <div className="refund">
      <div className="row">
        <div className="col-md-12">
          <h1>Refund</h1>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header text-white bg-primary">
                  <h3 className="mb-0">Pagos 11.11</h3>
                </div>
                <div className="card-body">
                  <form className="form" autoComplete="on">
                    <div className="form-group">
                      <div className="row form-group text-left">
                        <div className="col">
                          <label> Numero de Referencia </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                          <div className="invalid-feedback">
                            {" "}
                            Este campo es requerido{" "}
                          </div>
                        </div>
                      </div>
                      <PhoneNumber />

                      <DNI />

                      <Bank />
                    </div>
                    <div className="row form-group text-left">
                      <div className="col">
                        <label> Razones </label>
                        <select className="form-control" id="banco">
                          <option> Compra duplicada </option>
                          <option> Compra fallida </option>
                        </select>
                      </div>
                    </div>
                    <div className="row form-group text-left">
                      <div className="col">
                        <label> Otras Razones </label>
                        <input type="text" className="form-control" required />
                        <div className="invalid-feedback">
                          Este campo es requerido
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-dark btn-block">
                      Solicitar Reembolso
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
