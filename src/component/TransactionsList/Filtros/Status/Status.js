import React, {useState} from "react";
import Select from "react-select";


import "./Status.css"



const Status = () => {

    const options = [
        { value: 'Aprobado', label: 'Aprobadp' },
        { value: 'Rechazado', label: 'Rechazado' },
        { value: 'Procesando', label: 'Procesando' }
    ];


    const [selectedOption, setSelectedOption] = useState(null)


    return (


        <div className="bank-filter-wrapper">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                isSearchable={false}
                placeholder="Estatus..."
            />
        </div>


    )


}




export default Status;