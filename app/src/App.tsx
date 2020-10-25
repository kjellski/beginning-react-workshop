import './App.css';

import React from 'react';

// TASK: Understand Components, how to pass attributes and compose them.
//       Separate into components

export const App = () => (
  <div className="app">
    <div className="navbar">
      <div className="navbar-header">
        Navbar
      </div>

      <div className="navbar-item">
        A
      </div>
      <div className="navbar-item">
        B
      </div>
      <div className="navbar-item">
        C
      </div>
      
      <div className="navbar-footer">
        Profile
      </div>
    </div>
    <div className="content">Content</div>
  </div>
);

// QUESTIONS:
//   - What are `children`?
//   - What are valid children?
// LINKS:
//   - Components: https://reactjs.org/docs/components-and-props.html