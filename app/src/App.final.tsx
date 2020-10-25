import "./App.css";

import React, { FC, useState } from "react";

import attendees, { Attendee } from "./attendees";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

let renderCounter = 0;
const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount(count + 1);
  };
  renderCounter++;
  console.log(renderCounter);

  return (
    <div>
      <h1>Counter</h1>
      <pre>Current counter: {count}</pre>
      <button onClick={handleOnClick}>+1</button>
    </div>
  );
};

interface AttendeesListProps {
  attendees: Attendee[];
}

const AttendeesList: FC<AttendeesListProps> = ({ attendees }) => (
  <div className="attendee-list">
    <h1>Attendee List</h1>

    {attendees.map(attendee => (
      <div
        key={attendee.id}
        className="attendee-list-entry"
      >
        <div className="attendee-list-entry-name">
          {attendee.first_name} {attendee.last_name}
        </div>
        <div className="attendee-list-entry-info">
          <div>{attendee.username}</div>
          <div>{attendee.city}</div>
        </div>
      </div>
    ))}
  </div>
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
    <MainContent>
      <Counter />
      <AttendeesList attendees={attendees} />
    </MainContent>
  </div>
);
