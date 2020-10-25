import "./App.css";

import React, { FC } from "react";

import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

// TASK 1: This counter doesn't work... :/ why?
//         Introducing the useState hook
const Counter: FC = () => {
  let count = 0;

  const handleOnClick = () => {
    count = count + 1;
  };

  return (
    <div>
      <h1>Counter</h1>
      <pre>Current counter: {count}</pre>
      <button onClick={handleOnClick}>+1</button>
    </div>
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
      {/* This is how a JSX comment looks like :) */}
      <Counter />
      {/*
        TASK 2: 
          - Add a `<AttendeeList />` component with two arguments here.
            It should take the list as `attendees` and an attendee `onClick` handler
            in order to show the winner on top here.
          - Add a `<Winner />` component with one argument `attendee` here, it should 
            only show if somebody won
          - Feel free to use the classes from `App.css`
          - Bonus points for adding an `onClick` handler to winner in order to reset it.  
      */}
      {/* <Winner attendee={attendee} /> */}
      {/* <AttendeeList attendees={attendees} onClick={handleAttendeeClick} /> */}
    </MainContent>
  </div>
);
