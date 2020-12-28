import React, { useReducer, useState } from "react";
import UserValidation from "../Commons/UserValidation/UserValidation";
import PayComfirm from "./PayComfirm/PayComfirm";
import SuccessCharge from "./SuccessCharge/SuccessCharge";


const VirtualPoint = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    const currentStep = {
        current: 1,

        render: [
            {
                stepNumber: 1,
                component: <UserValidation onOkClick={() => { dispatch({ type: "next-step" }) }} />
            },
            {
                stepNumber: 2,
                component: <PayComfirm onPayClick={toggle} onBackClick={() => { dispatch({ type: 'previus-step' }) }} />
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





    const [cobro, setCobro] = useState({

        ref: '#011115f',
        amount: '1000',
        date: '14/01/2000',
        id: '27042411',
        phone: '555-5978-555',
        bank: 'Banesco'

    });







    let ComponentRender = stepState.render.find(step => {

        if (step.stepNumber === stepState.current) {
            return true;
        }

        return false;

    }).component;



    return (

        <div>

            {ComponentRender}

            <SuccessCharge onOkClick={toggle} title="my modal" modal={modal} onToggle={toggle} cobro={cobro}>
                <p>cuerpo  del modal</p>
            </SuccessCharge>

        </div>

    )


}




export default VirtualPoint;