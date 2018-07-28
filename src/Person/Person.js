import React from 'react'; //We need this for the return

// Best practice in making a Functional Component
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>)
};

export default person;