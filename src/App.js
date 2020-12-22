import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hola, soy la primera app en react</h1>
       <p>Realmente funciona</p>
       <Person name="Moises" age="24"/>
       <Person name="Maria" age="23"> Su hobby es dormir </Person>
       <Person name="Gabriela" age="23"/>
      </div>
    );
  }
}

export default App;
