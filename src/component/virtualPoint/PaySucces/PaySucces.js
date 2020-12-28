import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './PaySucces.css';

const PaySucces = ({ onOkClick, title, onToggle, modal, pago }) => (

    <Modal isOpen={modal} toggle={onToggle} >


        <ModalHeader toggle={onToggle}> {title} </ModalHeader>


        <ModalBody>

            <div className="payItem">
                <h5>Numero de Referencia:</h5>
                <span> {pago.ref} </span>
            </div>

            <div className="payItem">
                <h5>Monto:</h5>
                <span> {pago.amount} </span>
            </div>
            <div className="payItem">
                <h5>Fecha:</h5>
                <span> {pago.date} </span>
            </div>
            <div className="payItem">
                <h5>Identificacion:</h5>
                <span> {pago.id} </span>
            </div>
            <div className="payItem">
                <h5>Telefono:</h5>
                <span> {pago.phone} </span>
            </div>
            <div className="payItem">
                <h5>Banco:</h5>
                <span> {pago.bank} </span>
            </div>


        </ModalBody>


        <ModalFooter>
            <Button color="primary" onClick={onOkClick}>Do Something</Button>{' '}
            <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>


    </Modal>

)




export default PaySucces;