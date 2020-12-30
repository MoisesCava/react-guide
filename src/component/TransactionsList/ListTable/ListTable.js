import React, { useState } from "react";
import { withRouter } from "react-router-dom";


import "./ListTable.css"






const ListTable = ({ transactions ,...props }) => (


    <div>   
        <table className="table">
            <thead className="bg-primary">
                <tr>
                    <th scope="col">Referencia</th>
                    <th scope="col">Monto</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Estatus</th>
                    <th scope="col">fecha</th>
                    <th scope="col">banco</th>
                    <th scope="col">operador</th>
                </tr>
            </thead>
            <tbody>

                {
                    transactions.map(transaction => {
                        return (

                            <tr onClick={ ()=>{ props.history.push(props.match.path + "/" + transaction.referencia) } } key={transaction.referencia}>

                                <th>
                                    {transaction.referencia}
                                </th>
                                <th>
                                    {transaction.monto}
                                </th>
                                <th>
                                    {transaction.tipo}
                                </th>
                                <th>
                                    {transaction.status}
                                </th>
                                <th>
                                    {transaction.fecha}
                                </th>
                                <th>
                                    {transaction.banco}
                                </th>
                                <th>
                                    {transaction.operador}
                                </th>

                            </tr>


                        )
                    })
                }

            </tbody>
        </table>
    </div >



)





export default withRouter(ListTable);