import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


//Renders the react application
//Renders our <App> component in the place of the elemnt with root ID
ReactDOM.render(<App title="Relevant Persons"/>, document.getElementById('root'));
registerServiceWorker();
