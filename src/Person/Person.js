import React from 'react'; //We need this for the return

import './Person.css';
// Best practice in making a Functional Component
const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/*This 'changed' holds a reference to the nameChangedHandler and updates the state*/}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>)
};

//MOST PARTS OF THE APPLICATION SHOULDN'T CHANGE THE APPLICATION STATE
//THEY SHOULD JUST RENDER SOMETHING OT THE DOM (DYNAMICALLY)
//STATE SHOULD BE ALTERED ONLY IN A FEW SELECTED COMPONENTS (CALLED
//CONTAINERS e.g. App.js)

export default person;