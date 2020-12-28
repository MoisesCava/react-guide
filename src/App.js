import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PaymentButton from '../src/component/PaymentButton/PaymentButton'
import ChargeForm from './component/virtualPoint/ChargeForm/ChargeForm';


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
                  <NavLink to="/" className="nav-link">PaymentButton</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/virtual-point" className="nav-link" > Virtual point </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <Route path="/" exact component={PaymentButton} />
        <Route path="/virtual-point" exact component={ChargeForm} />
      </Router>
    </div>
  );
}

export default app;
