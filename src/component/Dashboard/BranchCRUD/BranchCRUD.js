import React from 'react'
import './BranchCRUD.css'
import * as Icon from 'react-feather';

const BranchCRUD = () => (

    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-uppercase mb-0">Manejar Sucursales</h5>
                    </div>
                    <div className="table-responsive">
                        <table className="table no-wrap user-table mb-0">
                            <thead>
                                <tr>
                                    <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Nombre de sucursal</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">Dirección</th>
                                    <th scope="col" className="border-0 text-uppercase font-medium">RIF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Sucursal 1</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 1</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">111111111</span><br></br>

                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye className="manage-btn" /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Sucursal 2</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 2</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">222222222</span><br></br>

                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye className="" /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pl-4">1</td>
                                    <td>
                                        <h5 className="font-medium mb-0">Sucursal 2</h5>
                                    </td>
                                    <td>
                                        <span className="text-muted">Sucursal 3</span><br></br>
                                    </td>
                                    <td>
                                        <span className="text-muted">333333333</span><br></br>

                                    </td>
                                    <td>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle"><Icon.Eye /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Edit /></button>
                                        <button type="button" id="btn-circle" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><Icon.Trash2 /></button>
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

export default BranchCRUD;