import React,{useState} from "react";
import PhoneNumber from "../Commons/PhoneNumber/PhoneNumber";
import Bank from "../Commons/Bank/Bank";
import DNI from "../Commons/DNI/DNI";
import Select from 'react-select'
const Refund = (props) => {
  const options = [
    {value: '111222g', label: '111222g'},
    {value: '222333d', label: '222333d'},
    {value: '333444b', label:'333444b'},
    {value: '444555l', label: '444555l'}
  ]


  return (
    <div className="refund">
      <div className="row">
        <div className="col-md-12">
          <h1>Reembolso</h1>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header text-white bg-primary">
                  <h3 className="mb-0">Reembolso</h3>
                </div>
                <div className="card-body">
                  <form className="form" autoComplete="on">
                    <div className="form-group">
                      <div className="row form-group text-left">
                        <div className="col">
                          <label> Numero de Referencia </label>
                          <div>
                          <Select
                          options={options}
                          
                          />

                          </div>
                        </div>
                      </div>
                      <PhoneNumber />
                      <DNI />
                      <div className="row form-group text-left">
                        <Bank />
                      </div>
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
                    <button type="button" className="btn btn-success btn-block">
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
