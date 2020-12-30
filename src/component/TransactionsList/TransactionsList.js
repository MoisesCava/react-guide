import React, { useState } from "react";
import Filtros from "./Filtros/Filtros";
import ListTable from "./ListTable/ListTable";








const TransactionsList = ({...props, match}) => {


    const initialList = [

        {
            referencia : "01214FEAG",
            monto : "15000",
            status : "aprobado",
            fecha : "14/01/200",
            banco : "Banesco",
            operador : "reinel",
            tipo : "dolar"

        },
        
        {
            referencia : "02214FEAG",
            monto : "33000",
            status : "aprobado",
            fecha : "14/01/200",
            banco : "Banesco",
            operador : "reinel",
            tipo : "petro"

        },
        
        {
            referencia : "03214FEAG",
            monto : "1500",
            status : "rechazado",
            fecha : "14/01/200",
            banco : "Banco nacional de credito",
            operador : "reinel",
            tipo : "Bitcoin"

        },
        
        {
            referencia : "04214FEAG",
            monto : "2000",
            status : "aprobado",
            fecha : "14/01/200",
            banco : "Banesco",
            operador : "reinel",
            tipo : "Bolivares"

        }

    ];

    const [transactions,setTransactions] = useState(initialList);


    return (
        <div>
            <h1>Lista de transacciones</h1>
            <Filtros />

            <h3>Operaciones</h3>
            <ListTable transactions={transactions} />
        </div>
        
    )



}





export default TransactionsList;