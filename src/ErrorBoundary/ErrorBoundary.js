import React, {Component} from 'react';

//Wraps a component as in App.js to handle any error the component might throw
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render(){

        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }

    }
}

//!!! USE ERROR BOUNDARY ONLY ON CODE THAT MAY FAILD
// DO NOT CLUSTER THE WHOLE APPLICATION WITH ERROR BOUNDARY WRAPPERS

//THIS SHOWS CUSTOM ERROR MESSAGE AND DOES NOT FAIL THE WHOLE APPLICATION
//BUT ONLY SHOWS ON THE COMPONENT THAT FAILED
//THE APPLICATION WILL STILL WORK FINE AND ONLY THE PROBLEMATIC COMPONENT WILL
//BE REPLACED WITH THE CUSTOM ERROR MESSAGE

export default ErrorBoundary;