import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Here we write our unit tests

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
