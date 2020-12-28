import React from 'react'
import Bank from '../Commons/Bank/Bank';
import OTP from '../Commons/OTP/OTP'

import './PaymentButton.css'

const paymentButton = () => {
    return (
        <div className="PaymentButton py-5">
            <div className="row">
                <div className="col-md-12">
                    <h1> Boceto botón de pago</h1>
                    <div className="row">
                        <div id="formcard" className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header text-white bg-primary">
                                    <h3 className="mb-0">Pagos 11.11</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form" autoComplete="on" id="paymentform">
                                        <div className="form-group">
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
                                            </div>
                                            <div className="row form-group">
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
                                            <Bank/>
                                            <div className="row form-group text-left">
                                                <div className="col">
                                                    <label> Concepto </label>
                                                    <input type="text" className="form-control" required />
                                                    <div className="invalid-feedback"> Este campo es requerido </div>
                                                </div>
                                            </div>
                                            <OTP/>  
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button type="button" className="btn btn-secondary btn-block"> Cancelar </button>

                                            </div>
                                            <div className="col">
                                                <button type="button" className="btn btn-success btn-block"> Pagar </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default paymentButton; 