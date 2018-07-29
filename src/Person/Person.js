import React from 'react'; //We need this for the return

// Best practice in making a Functional Component
const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>)
};

//MOST PARTS OF THE APPLICATION SHOULDN'T CHANGE THE APPLICATION STATE
//THEY SHOULD JUST RENDER SOMETHING OT THE DOM (DYNAMICALLY)
//STATE SHOULD BE ALTERED ONLY IN A FEW SELECTED COMPONENTS (CALLED
//CONTAINERS e.g. App.js)

export default person;