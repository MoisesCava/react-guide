import React from 'react'
import './OperatorDashboard.css'
import * as Icon from 'react-feather';

const OperatorCRUD = () => (

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
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Daniel Cabrera</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 1</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">daniel@website.com</span><br></br>

                                    </td>
                                    <td>
                                        <span className="text-muted">999 - 444 - 555</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">26345789</span>
                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye className="manage-btn" /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Lock /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Sebastian Perez</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 2</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">sebastian@website.com</span><br></br>

                                    </td>
                                    <td>
                                        <span className="text-muted">999 - 444 - 555</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">27345789</span>
                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye className="" /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Lock /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Maria Avendaño</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 3</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">maria@website.com</span><br></br>

                                    </td>
                                    <td>
                                        <span className="text-muted">999 - 444 - 555</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">29345709</span>
                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Lock /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Maria Avendaño</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 3</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">maria@website.com</span><br></br>

                                    </td>
                                    <td>
                                        <span className="text-muted">999 - 444 - 555</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">29345709</span>
                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Lock /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Maria Avendaño</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 3</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">maria@website.com</span><br></br>

                                    </td>
                                    <td>
                                        <span className="text-muted">999 - 444 - 555</span>
                                    </td>
                                    <td>
                                        <span className="text-muted">29345709</span>
                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Lock /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#" className="float-t">
                            <Icon.Plus className="my-float" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default OperatorCRUD;