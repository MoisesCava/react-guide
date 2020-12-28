import React,{useState} from "react";
import ChargeForm from "./ChargeForm/ChargeForm";
import PaySucces from "./PaySucces/PaySucces";



const VirtualPoint = () => {

    const [modal,setModal] = useState(false);


    const [pago,setPago] = useState({

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

            <PaySucces onOkClick={toggle} title="my modal" modal={modal} onToggle={toggle} pago={pago}>
                <p>cuerpo  del modal</p>    
            </PaySucces>

        </div>

    )


}




export default VirtualPoint;