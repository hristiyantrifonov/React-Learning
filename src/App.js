import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';

//The starting React component
class App extends Component {
  //Only available where we extend a component (not in function component like Person.js)
  //We need to be careful with those states (can be unpredictable if many)
  state = {
      persons: [
          {name: 'Max', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
  }

  //Good practice to name in with handler (because we will use it as event handler)
  nameChangedHandler = (event) => {
      this.setState({persons: [
              {name: 'Max', age: 28},
              {name: event.target.value, age: 29},
              {name: 'Stephanie', age: 17}
          ]})
  };

  deletePersonHandler = (personIndex) => {
    //ALWAYS UPDATE ARRAY IN AN IMMUTABLE FASHION WITHOUT MUTATING THE ORIGINAL STATE FIRST
    // const persons = this.state.persons;  !!!THIS IS BAD PRACTICE IT DOES NOT COPY THE ARRAY BUT ONLY REFERENCE IT
    // const persons = this.state.persons.slice(); //GOOD - SLICE WITHOUT ARGS IS MAKING A COPY
    const persons = [...this.state.persons]; //AN ALTERNATIVE - SPREADS IT INSIDE THE EMPTY
    persons.splice(personIndex, 1); //Remove one element from the array
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() { //Every component needs to render some html
      //LECTURE 47 - we are writing JS here
      const myStyle = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

      //LECTURE 51 - The elegant way
      //The default
      let persons = null;

      //If showpersons is true we set the variable and render
      if(this.state.showPersons) {
          persons = (
              <div>
                  {/*Lecture 53 - mapping the state array into JSX elements to render*/}
                  {this.state.persons.map((person, index) => {
                      return <Person
                          click = {() => this.deletePersonHandler(index)}
                          name={person.name} age={person.age}/>
                  })}
              </div>
          );
      }

    return (
        // THIS IS NOT HTML IT IS JSX
        // JSX is just syntactic sugar for JavaScript, allowing you to write
        // HTMLish code instead of nested React.createElement(...) calls.
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
          {/*Another way of calling the function with arguments (bind is recommended*/}
        <button
            style={myStyle} //LECTURE 47
            onClick={this.togglePersonsHandler} >Toggle Persons</button>

          {/*LECTURE 51 - The reference of the div */}
          {persons}
      </div>
    );

      // The above compiles to this, although it looks like HTML
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React Application boooy') )
  }
}

export default App;
