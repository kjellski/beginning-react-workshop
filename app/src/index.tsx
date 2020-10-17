import React from 'react';
import ReactDOM from 'react-dom';
// import components with the 
import { App } from './App';
// import CSS just as if it was a normal file
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
