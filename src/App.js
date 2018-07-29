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
      ]
  }

  //Good practice to name in with handler (because we will use it as event handler)
  switchNameHandler = () => {
      // console.log('Was clicked');
      // DON'T DO THIS this.state.persons[0].name = 'Maximilian'
      this.setState({persons: [
              {name: 'Maximilian', age: 28},
              {name: 'Manu', age: 29},
              {name: 'Stephanie', age: 17}
          ]})
  }

  render() { //Every component needs to render some html
    return (
        // THIS IS NOT HTML IT IS JSX
        // JSX is just syntactic sugar for JavaScript, allowing you to write
        // HTMLish code instead of nested React.createElement(...) calls.
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

      // The above compiles to this, although it looks like HTML
      // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React Application boooy') )
  }
}

export default App;
