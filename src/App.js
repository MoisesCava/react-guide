import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'



const app = props => {

  const [showState, setShowState] = useState(false)

  const [personsState, setPersonsState] = useState(
    [
      {
        name: 'Moises',
        age: 24
      },
      {
        name: 'Maria',
        age: 23
      },
      {
        name: 'Gabriela',
        age: 23
      }
    ]
  );




  console.log(personsState);

  const deletePersonHandler = (personIndex) => {
    console.log('dieron click');
    console.log(personIndex);


    setPersonsState((prevState) => {

      
      prevState.splice(personIndex,1)

      
      return [...prevState];



    })
  }

  const togglePersonHandler = () => {
    setShowState(!showState)
  }

  let persons = null

  if (showState) {
    persons = (
      <div >
        {personsState ? personsState.map((person, index) => {
          return <Person
            key={index}
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
          />
        }) : null}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hola soy la primera app en React</h1>
      <p>Si funciona</p>
      <button onClick={togglePersonHandler}>cambiar nombre</button>
      {persons}
    </div>
  );
}

export default app;
