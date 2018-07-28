import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

//The starting React component
class App extends Component {

  render() { //Every component needs to render some html
    return (
        // THIS IS NOT HTML IT IS JSX
        // JSX is just syntactic sugar for JavaScript, allowing you to write
        // HTMLish code instead of nested React.createElement(...) calls.
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );

      // The above compiles to this, although it looks like HTML
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React Application boooy') )
  }
}

export default App;
