import React, { useState } from "react";
import Select from "react-select";

import "./CoinFilter.css"



const CoinFilter = () => {


    const options = [
        { value: 'Bolivares', label: 'Bolivares' },
        { value: 'petro', label: 'petro' },
        { value: 'dolares', label: 'dolares' },
        { value: 'bitcoin', label: 'bitcoin' }
    ];


    const [selectedOption, setSelectedOption] = useState(null)


    return (


        <div className="coin-filter-wrapper">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                isSearchable={false}
                placeholder="tipo de moneda..."
            />
        </div>


    )

}




export default CoinFilter;