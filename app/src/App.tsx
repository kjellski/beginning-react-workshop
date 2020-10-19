import React, { FC, useState } from "react";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <pre>Current counter: {count}</pre>
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
};

// TASK: Write a Stopwatch component that shows the current time,
// a button to click and how long you took to press that button since
// the last time.

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
      <Counter />
    </MainContent>
  </div>
);
