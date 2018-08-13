import React, {Component} from 'react'; //We need this for the return

import cssClasses from './Person.css';
// Best practice in making a Functional Component

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.ks] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
    }

    render (){
        console.log('[Person.js] Inside render()');
        return (
            <div className={cssClasses.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                {/*This 'changed' holds a reference to the nameChangedHandler and updates the state*/}
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>)
    }
}

export default Person;