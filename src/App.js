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

          <nav>
            <ul>
              <li> <NavLink to="/">PaymentButton</NavLink> </li>
              <li> <NavLink to="/virtual-point"> Virtual point </NavLink></li>
            </ul>
          </nav>

        </header>

        <Route path="/" exact component={PaymentButton} />
        <Route path="/virtual-point" exact component={ChargeForm} />

      </Router>
    </div>
  );
}

export default app;
