import React, { PureComponent } from 'react';

import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//The starting React component (IT IS A CONTAINER)
//THIS IS CORRECT STRUCTURE BECAUSE
//CONTAINERS SHOULD ONLY MANAGE THE STATE AND ALTERS THE STATE
class App extends PureComponent {

  //Lifecycle Hooks
  constructor(props){
      super(props);
      console.log('[App.ks] Inside Constructor', props);
  }

  componentWillMount(){
      console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
      console.log('[App.js] Inside componentDidMount()');
  }

  //PureComponent makes this for us - do not use it everything only place strategically
  //Again a goo check - making sure we go through updating process only if we need to
  // shouldComponentUpdate(nextProps, nextState){
  //     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //     return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(){
      console.log('[UPDATE App.js] Inside componentDidUpdate')
  }

  state = {
      persons: [
          { id: 'dsf23', name: 'Max', age: 28},
          { id: 'fdsfsd2', name: 'Manu', age: 29},
          { id: 'fgfw87', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
  }

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

  render() {
      console.log('[App.js] Inside render()');
      let persons = null;

      //If showPersons is true we set the variable and render
      if(this.state.showPersons) {
          persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />;
      }

    return (
        <div className={cssClasses.App}>
            <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
            <Cockpit
                appTitle={this.props.title}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonsHandler}/>

            {persons}
        </div>
    );
  }
}

export default App;
