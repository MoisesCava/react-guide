import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'
import PaymentButton from './PaymentButton/PaymentButton'


const app = props => {

  const [showState, setShowState] = useState(false)

  const [personsState, setPersonsState] = useState(
    [
      {
        name: 'Moises',
        age: 24,
        id: 1
      },
      {
        name: 'Maria',
        age: 23,
        id: 2
      },
      {
        name: 'Gabriela',
        age: 23,
        id: 3
      }
    ]
  );

  const nameChangeHandler = (event, id) => {

    const personIndex = personsState.findIndex(p =>{
      return p.id === id;
    });

    const person = {...personsState[personIndex]};

    person.name = event.target.value;

    const persons = [...personsState]
    persons[personIndex] = person;



    setPersonsState(persons);
  }
  

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
            id={person.id}
            changed = {(event)=> nameChangeHandler(event, person.id)}
          />
        }) : null}
      </div>
    )
  }

  return (
    <div className="App">
      <PaymentButton/>
    </div>
  );
}

export default app;
