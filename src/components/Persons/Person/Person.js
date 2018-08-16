import React, {Component} from 'react'; //We need this for the return
import PropTypes from 'prop-types';

import cssClasses from './Person.css';
import withClass from '../../../hoc/withClass'; //HOC
import Aux from '../../../hoc/Auxiliary'; //HOC
import {AuthContext} from "../../../containers/App";

// Best practice in making a Functional Component

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.ks] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount(){
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position ===0){
            this.inputElement.current.focus();
        }
    }

    render (){
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated!</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                {/*This 'changed' holds a reference to the nameChangedHandler and updates the state*/}
                <input
                        ref={this.inputElement} //References are available only in state-full components
                        type="text"
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>)
    }
}

//LECTURE 99 - Validating Props
//Key value pairs - Basic setup
Person.propTypes = {
    click: PropTypes.func, //The value in click prop must be a function
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, cssClasses.Person);