import React, { useState } from 'react'
import './OperatorDashboard.css'
import * as Icon from 'react-feather';

const OperatorCRUD = () => {
    const [operatorState, setOperatorSrtate] = useState(
        [
            {
                name: 'Operador 1',
                branch: 'Sucursal 1',
                email: 'operado1@gmail.com',
                phone: '04124444333',
                id_card: 27888234
            },
            {
                name: 'Operador 2',
                branch: 'Sucursal 2',
                email: 'operado2@gmail.com',
                phone: '04124444333',
                id_card: 27888234
            },
            {
                name: 'Operador 3',
                branch: 'Sucursal 3',
                email: 'operado3@gmail.com',
                phone: '04124444333',
                id_card: 27888234
            },
            {
                name: 'Operador 4',
                branch: 'Sucursal 4',
                email: 'operado4@gmail.com',
                phone: '04124444333',
                id_card: 27888234
            }
        ]
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-uppercase mb-0">Manejar Operadores</h5>
                        </div>
                        <div className="table-responsive">
                            <table className="table no-wrap user-table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Nombre</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Sucursal</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Correo</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Numero de Teléfono</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Cédula</th>
                                        <th scope="col" className="border-0 text-uppercase font-medium">Manejar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        operatorState.map((operator, index) => {
                                            return (                                            <tr>
                                                <td className="pl-4">1</td>
                                                <td>
                                                    <h5 className="font-medium mb-0">{operator.name}</h5>
                                                </td>
                                                <td>
                                                    <span className="text-muted">{operator.name}</span><br></br>
                                                </td>
                                                <td>
                                                    <span className="text-muted">{operator.name}</span><br></br>

                                                </td>
                                                <td>
                                                    <span className="text-muted">{operator.name}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">{operator.name}</span>
                                                </td>
                                                <td>
                                                    <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye className="manage-btn" /></button>
                                                    <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                                    <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                                    <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Lock /></button>
                                                </td>
                                            </tr>) ;
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="#" className="float-t">
                                <Icon.Plus className="my-float" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OperatorCRUD;