import React,{useState} from "react";
import ChargeForm from "./ChargeForm/ChargeForm";
import SuccessCharge from './SuccessCharge/SuccessCharge'



const VirtualPoint = () => {

    const [modal,setModal] = useState(false);

    const [cobro,setCobro] = useState({

        ref : '#011115f',
        amount : '1000',
        date : '14/01/2000',
        id : '27042411',
        phone : '555-5978-555',
        bank : 'Banesco'

    });


    const toggle = () => setModal(!modal)


    return (

        <div>
            <ChargeForm onPayClick={toggle} />
            <SuccessCharge onOkClick={toggle} title="Modal de cobro" modal={modal} onToggle={toggle} cobro={cobro}>
                <p>Modal de Cobro</p>
            </SuccessCharge>
        </div>

    )


}




export default VirtualPoint;