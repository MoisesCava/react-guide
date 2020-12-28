import React from "react";


import OTP from "../../Commons/OTP/OTP";


const PayComfirm = ({ onBackClick, onPayClick }) => (

    <div className="PaymentButton py-5">

        {console.log(onPayClick)}
        <div className="row">
            <div className="col-md-12">
                <h1> Virtual Point </h1>
                <div className="row">
                    <div id="formcard" className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header text-white bg-primary">
                                <h3 className="mb-0">Confirmar pago</h3>
                            </div>
                            <div className="card-body">



                                <form className="form" autoComplete="on" id="paymentform">
                                    <div className="form-group">


                                        <div className="row form-group text-left">


                                            <label> Tipo Moneda </label>
                                            <select className="form-control" id="banco">
                                                <option> Bsf. </option>
                                                <option> $ </option>

                                            </select>


                                        </div>



                                        <div className="row form-group text-left">
                                            <div className="col">
                                                <label> Monto </label>
                                                <input type="text" className="form-control" required />
                                                <div className="invalid-feedback"> Este campo es requerido </div>
                                            </div>
                                        </div>

                                        <div className="row form-group text-left">
                                            <div className="col">
                                                <label> Concepto </label>
                                                <input type="text" className="form-control" required />
                                                <div className="invalid-feedback"> Este campo es requerido </div>
                                            </div>
                                        </div>

                                        <OTP />

                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" className="btn btn-secondary btn-block" onClick={onBackClick}> Volver </button>

                                        </div>
                                        <div className="col">
                                            <button type="button" className="btn btn-success btn-block" onClick={onPayClick}> Pagar </button>
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

)


export default PayComfirm;