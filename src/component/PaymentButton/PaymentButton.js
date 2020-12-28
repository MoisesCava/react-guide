import React, { useReducer, useState } from "react";
import UserValidation from "../Commons/UserValidation/UserValidation";
import PaySucces from "./PaySuccess/PaySuccess";

import './PaymentButton.css'
import PayConfirm from "./PayConfirm/PayConfirm";

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

    const currentStep = {
        current: 1,

        render: [
            {
                stepNumber: 1,
                component: <UserValidation onOkClick={() => { dispatch({ type: "next-step" }) }} />
            },
            {
                stepNumber: 2,
                component: <PayConfirm onPayClick={toggle} onBackClick={() => { dispatch({ type: 'previus-step' }) }} />
            }
        ]
    }


    const stepReducer = (state, action) => {

        switch (action.type) {
            case 'next-step':


                return {
                    ...state,
                    current: state.current + 1
                }


            case 'previus-step':
                return {
                    ...state,
                    current: state.current - 1
                }

            default:
                return state

        }
    }
    const [stepState, dispatch] = useReducer(stepReducer, currentStep);

    let ComponentRender = stepState.render.find(step => {

        if (step.stepNumber === stepState.current) {
            return true;
        }

        return false;

    }).component;

    return (
        <div>

            {ComponentRender}
            <PaySucces onClick={toggle} title="Modal de Pago" modal={modalPayment} onToggle={toggle} pago={pago}>
                <p>cuerpo  del modal</p>
            </PaySucces>
        </div>
    );
}

export default paymentButton; 
