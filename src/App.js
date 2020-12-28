import React, { useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import PaymentButton from './PaymentButton/PaymentButton'
import VirtualPoint from './component/virtualPoint/VirtualPoint';


const app = props => {


  return (
    <div className="App">

      <Router>

        <header>

          <nav>
            <ul>
              <li> <NavLink to="/" exact>PaymentButton</NavLink> </li>
              <li> <NavLink to="/virtual-point"> Virtual point </NavLink></li>
            </ul>
          </nav>

        </header>

        <Route path="/" exact component={PaymentButton} />
        <Route path="/virtual-point" exact component={VirtualPoint} />

      </Router>
    </div>
  );
}

export default app;
