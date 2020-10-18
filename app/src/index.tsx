import React from 'react';
import ReactDOM from 'react-dom';
// import components with the 
import { App } from './App';
// import CSS just as if it was a normal file
import './index.css';


// TASK: Understand Components, how to pass attributes and compose them.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// QUESTIONS:
//   - What is a Component?
//   - How to pass attributes / compose them?
// LINKS:
//   - Components: https://reactjs.org/docs/components-and-props.html

