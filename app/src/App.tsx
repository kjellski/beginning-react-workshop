import React from 'react';
import './App.css';

// TASK: Separate into components

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
