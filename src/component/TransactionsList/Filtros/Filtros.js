import React from "react";
import Amount from "./Amount/Amount";
import BankFilter from "./BankFilter/BankFilter";
import CoinFilter from "./CoinFilter/CoinFilter";
import Fecha from "./Fechas/Fecha";


import "./Filtros.css"
import Operator from "./Operator/Operator";
import Status from "./Status/Status";

const Filtros = () => {



    return (

        <div className="filters-wrapper">


            <div className="flex-row">
                <CoinFilter />
                <BankFilter />
            </div>


            <div className="flex-row">

                <Fecha label="fecha inicial:" />
                <Fecha label="fecha final:" />

            </div>


            <div className="flex-row">
                <Status/>
            </div>


            <div className="flex-row">
                <Amount label="Mayor a:"/>
                <Amount label="Menor a:"/>
            </div>


            <div className="flex-row">
                <Operator/>
            </div>

        </div>


    )



}




export default Filtros;