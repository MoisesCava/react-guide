import React, { useState } from "react";
import PaymentForm from './PaymentForm/PaymentForm'
import PaySucces from "./PaySuccess/PaySuccess";

import './PaymentButton.css'

const paymentButton = () => {

    const [modalPayment, setModal] = useState(false);

    const [pago, setPago] = useState({

        ref: '#011115f',
        amount: '1000',
        date: '14/01/2000',
        phone: '555-5978-555',
        bank: 'Banesco',
        description: 'Artículo de prueba',

    });

    const toggle = () => setModal(!modalPayment)

    return (
        <div>
            <PaymentForm onPayClick={toggle} />
            <PaySucces onClick={toggle} title="Modal de Pago" modal={modalPayment} onToggle={toggle} pago={pago}>
                <p>cuerpo  del modal</p>
            </PaySucces>
        </div>
    );
}

export default paymentButton; 
