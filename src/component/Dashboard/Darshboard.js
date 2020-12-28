import React from "react";

import './Dashboard.css'

import * as Icon from 'react-feather';


const Dashboard = () => (

    <div>
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <span>
                                        <Icon.Home className="feather" />
                                    </span>
                  Dashboard <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file">
                                        <Icon.File className="feather" />
                                    </span>
                  Cobrar
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="shopping-cart">
                                        <Icon.ShoppingCart className="feather" />
                                    </span>
                  Anular
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="users">
                                        <Icon.Users className="feather" />
                                    </span>
                  Estadísticas
                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span>
                                    <Icon.Calendar className="feather"/>
                                </span>
                Esta semana
              </button>
                        </div>
                    </div>

                    <canvas className="my-4" id="myChart" width="900" height="380"></canvas>

                    <h2>Transacciones</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th>Referencia</th>
                                    <th>Fecha</th>
                                    <th>Monto</th>
                                    <th>Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,001</td>
                                    <td>19/12/2020</td>
                                    <td>100$</td>
                                    <td>Acitvo</td>
                                </tr>
                                <tr>
                                    <td>1,002</td>
                                    <td>05/10/2020</td>
                                    <td>30$</td>
                                    <td>Activo</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>
                                    <td>04/03/2020</td>
                                    <td>40$</td>
                                    <td>En espera</td>
                                </tr>
                                <tr>
                                    <td>1,003</td>
                                    <td>16/02/2020</td>
                                    <td>200$</td>
                                    <td>Acitvo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    </div>
)

export default Dashboard;