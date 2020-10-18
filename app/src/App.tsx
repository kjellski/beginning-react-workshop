import React, { FunctionComponent } from "react";
import "./App.css";

// TASK: Separate into components

const Navbar: FunctionComponent = ({ children }): JSX.Element => (
  <div className="navbar">{children}</div>
);

const NavbarHeader: FunctionComponent = ({ children }): JSX.Element => (
  <div className="navbar-header">{children}</div>
);

const NavbarItem: FunctionComponent = ({ children }): JSX.Element => (
  <div className="navbar-item">{children}</div>
);

const NavbarFooter: FunctionComponent = ({ children }): JSX.Element => (
  <div className="navbar-footer">{children}</div>
);

const MainContent: FunctionComponent = ({ children }): JSX.Element => (
  <div className="content">{children}</div>
);

export const App = () => (
  <div className="app">
    <Navbar>
      <NavbarHeader>Navbar</NavbarHeader>

      <NavbarItem>A</NavbarItem>
      <NavbarItem>B</NavbarItem>
      <NavbarItem>C</NavbarItem>

      <NavbarFooter>Profile</NavbarFooter>
    </Navbar>
    <MainContent>Content</MainContent>
  </div>
);
