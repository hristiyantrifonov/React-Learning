import React, { Component } from 'react';
import cssClasses from './App.css';
import Person from './Person/Person.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

//The starting React component
class App extends Component {
  //Only available where we extend a component (not in function component like Person.js)
  //We need to be careful with those states (can be unpredictable if many)
  state = {
      persons: [
          { id: 'dsf23', name: 'Max', age: 28},
          { id: 'fdsfsd2', name: 'Manu', age: 29},
          { id: 'fgfw87', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
  }

  //Good practice to name in with handler (because we will use it as event handler)
  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
      });

      //THE MOST EFFICIENT WAY WITHOUT MUTATING THE STATE
      const person = {
          ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({persons: persons});
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

      let persons = null;
      let btnClass = '';

      //If showPersons is true we set the variable and render
      if(this.state.showPersons) {
          persons = (
              <div>
                  {/*Lecture 53 - mapping the state array into JSX elements to render*/}
                  {this.state.persons.map((person, index) => {
                      return <ErrorBoundary key={person.id}>
                          <Person
                          click = {() => this.deletePersonHandler(index)}
                          name={person.name}
                          age={person.age}
                          //In key we put some ID to help render more efficiently
                          //React compares this property on every render to only rerender elements that did change

                          changed={(event) => this.nameChangedHandler(event, person.id)}/> </ErrorBoundary>
                  })}
              </div>
          );

          btnClass = cssClasses.Red;
      }

    //LECTURE 63
    const classes = [];

    if (this.state.persons.length <= 2){
        classes.push( cssClasses.red );
    }
    if (this.state.persons.length <= 1){
        classes.push( cssClasses.bold );
    }

    return (
        <div className={cssClasses.App}>
            <h1>Hi, I am a React App</h1>
            <p className={classes.join(' ')} >This is really working!</p>
            <button
                className={btnClass}
                onClick={this.togglePersonsHandler} >Toggle Persons</button>

            {/*LECTURE 51 - The reference of the div */}
            {persons}
        </div>
    );

      // The above compiles to this, although it looks like HTML
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React Application boooy') )
  }
}

export default App; //Higher order component - injecting some extra functionality
