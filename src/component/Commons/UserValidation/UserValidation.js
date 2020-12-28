import React from "react";
import Bank from "../Bank/Bank";
import DNI from "../DNI/DNI";
import PhoneNumber from "../PhoneNumber/PhoneNumber";




const UserValidation = ({ onOkClick }) => (

    <div className="PaymentButton py-5">
        <div className="row">
            <div className="col-md-12">
                <div className="row">
                    <div id="formcard" className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header text-white bg-primary">
                                <h3 className="mb-0">Validar Usuario</h3>
                            </div>
                            <div className="card-body">
                                <form className="form" autoComplete="on" id="paymentform">
                                    <div className="form-group">
                                        <PhoneNumber />
                                        <DNI />
                                        <div className="row form-group text-left">
                                            <Bank />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" className="btn btn-success btn-block" onClick={onOkClick}> Verificar </button>
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



export default UserValidation;