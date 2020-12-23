import React, { useState } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


const app = props => {

  const [showState, setShowState] = useState(false)

  const [personsState, setPersonsState] = useState({
    persons: [
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
  });

  const [otroEstado, setOtroEstado] = useState('algun otro valor');

  console.log(personsState, otroEstado);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {
          name: newName,
          age: 24
        },
        {
          name: 'Maria',
          age: 23
        },
        {
          name: 'Gabriela',
          age: 25
        }
      ]
    });
  }

  const [inputState, setInputState] = useState('Camila')

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        {
          name: 'Reinel',
          age: 24
        },
        {
          name: event.target.value,
          age: 23
        },
        {
          name: 'Gabriela',
          age: 25
        }
      ]
    });
  }

  const inputChangeHandler = (event) => {
    setInputState(
      event.target.value)
  }

  const togglePersonHandler = () => {
    setShowState(!showState)
  }

  let persons = null

  if (showState) {
    persons = (
      <div >  
        {personsState.persons.map(person => {
          return <Person name={person.name} age={person.age}/>
        })}
        {/* <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          click={switchNameHandler}
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          changed={nameChangeHandler}
        >
          My Hobbies: Racing
      </Person>
        <Person
          name={personsState.persons[2].
            name}
          age={personsState.persons[2].age}
        />
        <UserInput change={inputChangeHandler} />
        <UserOutput name={inputState} /> */}
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
