import React from 'react';

import  cssClasses from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
    const classes = [];
    let btnClass = cssClasses.Button;

    //If persons are visible set it to red class
    if (props.showPersons){
        btnClass = [cssClasses.Button, cssClasses.Red].join(' ');
    }

    if (props.persons.length <= 2){
        classes.push( cssClasses.red );
    }
    if (props.persons.length <= 1){
        classes.push( cssClasses.bold );
    }

    //HOC (Higher Order Components) wrap other components to add certain functionality
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')} >This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked} >Toggle Persons
            </button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
};

export default cockpit;