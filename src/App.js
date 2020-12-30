import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PaymentButton from '../src/component/PaymentButton/PaymentButton'
import VirtualPoint from "./component/virtualPoint/VirtualPoint";
import Refund from './component/Refund/Refund'
import SignIn from './component/Users/SignIn/SignIn'
import SignUp from './component/Users/SignUp/SignUp'
import Dashboard from './component/Dashboard/Darshboard';
import OperatorCRUD from './component/Dashboard/OperatorDashboard/OperatorDashboard';
import BranchCRUD from './component/Dashboard/BranchCRUD/BranchCRUD';





const app = props => {


  return (
    <div className="App">

      <Router>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Pagos 11.11</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">Botón de pago</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/virtual-point" className="nav-link" > Punto VirtualPoint </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/refund" className="nav-link" > Reembolso </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signin" className="nav-link" >Regitro</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="signup" className="nav-link" > Inicio de Sesión </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="dashboard" className="nav-link" > Tablero </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="operator-crud" className="nav-link" > Crud de Operadores </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="branch-crud" className="nav-link" > Crud de Sucursales </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>


        <Route path="/" exact component={PaymentButton} />
        <Route path="/virtual-point" exact component={VirtualPoint} />
        <Route path="/refund" exact component={Refund} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/operator-crud" exact component={OperatorCRUD}/>
        <Route path="/branch-crud" exact component={BranchCRUD}/>
      </Router>
    </div>
  );
}

export default app;
