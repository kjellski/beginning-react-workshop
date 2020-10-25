import "./App.css";

import React, { FC, useEffect, useState } from "react";

import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

const Clock: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1>
      {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </h1>
  );
};

export const App = () => (
  <div className="app">
    <Navbar>
      <NavbarHeader>Navbar</NavbarHeader>

      <NavbarItem>A</NavbarItem>
      <NavbarItem>B</NavbarItem>
      <NavbarItem>C</NavbarItem>

      <NavbarFooter>Profile</NavbarFooter>
    </Navbar>
    <MainContent>
      <Clock />
    </MainContent>
  </div>
);
