import React, {PureComponent} from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
    constructor(props){
        super(props);
        console.log('[Persons.ks] Inside Constructor', props);
    }

    componentWillMount(){
        console.log('[Persons.js] Inside componentWillMount()');
    }

    componentDidMount(){
        console.log('[Persons.js] Inside componentDidMount()');
    }

    //Update Lifecycle Hooks
    componentWillReceiveProps( nextProps ){
        console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    //Here if we return false we can stop any update process
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked; //better check to avoid render
    //     // return true;
    // }


    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate')
    }

    render(){
        console.log('[Persons.js] Inside render{}');
        return this.props.persons.map((person, index) => {
            return <Person
                click = {() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}/>
        } );
    }
}

export default Persons;