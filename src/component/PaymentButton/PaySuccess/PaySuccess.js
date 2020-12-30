import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './PaySuccess.css';

const PaySucces = ({ onClick, title, onToggle, modal, pago }) => (

    <Modal isOpen={modal} toggle={onToggle} >


        <ModalHeader toggle={onToggle}> {title} </ModalHeader>


        <ModalBody>

            <div className="payItem">
                <h5>Total:</h5>
                <span> {pago.ref} </span>
            </div>

            <div className="payItem">
                <h5>Referencia:</h5>
                <span> {pago.amount} </span>
            </div>
            <div className="payItem">
                <h5>Fecha y Hora:</h5>
                <span> {pago.date} </span>
            </div>
            <div className="payItem">
                <h5>Telefono:</h5>
                <span> {pago.phone} </span>
            </div>
            <div className="payItem">
                <h5>Banco:</h5>
                <span> {pago.bank} </span>
            </div>
            <div className="payItem">
                <h5>Descripción:</h5>
                <span> {pago.description} </span>
            </div>

        </ModalBody>


        <ModalFooter>
            <Button color="secondary" onClick={onToggle}>Cancel</Button>
            <Button color="primary" onClick={onClick}>Imprimir</Button>
            <Button color="info" onClick={onToggle}>Enviar al correo</Button>
        </ModalFooter>


    </Modal>

)




export default PaySucces;