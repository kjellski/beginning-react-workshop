import React from "react";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

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
