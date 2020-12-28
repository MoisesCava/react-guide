import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SuccessCharge = ({ onOkClick, title, onToggle, modal, cobro }) => (

    <Modal isOpen={modal} toggle={onToggle} >


        <ModalHeader toggle={onToggle}> {title} </ModalHeader>


        <ModalBody>

            <div className="payItem">
                <h5>Numero de Referencia:</h5>
                <span> {cobro.ref} </span>
            </div>

            <div className="payItem">
                <h5>Monto:</h5>
                <span> {cobro.amount} </span>
            </div>
            <div className="payItem">
                <h5>Fecha:</h5>
                <span> {cobro.date} </span>
            </div>
            <div className="payItem">
                <h5>Identificacion:</h5>
                <span> {cobro.id} </span>
            </div>
            <div className="payItem">
                <h5>Telefono:</h5>
                <span> {cobro.phone} </span>
            </div>
            <div className="payItem">
                <h5>Banco:</h5>
                <span> {cobro.bank} </span>
            </div>

        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={onOkClick}>Do Something</Button>{' '}
            <Button color="secondary" onClick={onToggle}>Cancel</Button>
        </ModalFooter>

    </Modal>
)

export default SuccessCharge;