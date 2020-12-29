import React, { useState } from "react";
import Select from "react-select";

import "./BankFilter.css"



const BankFilter = () => {


    const options = [
        { value: 'Banesco', label: 'Banesco' },
        { value: 'Banco Nacional De Credito', label: 'Banco Nacional De Credito' }
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
                placeholder="Banco..."
            />
        </div>


    )

}




export default BankFilter;