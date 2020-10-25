import "./App.css";

import React, { FC, useState } from "react";

import attendees, { Attendee } from "./attendees";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

type AttendeeViewProps = {
  attendee: Attendee;
}

const AttendeeView: FC<AttendeeViewProps> = ({ attendee }) => (
  <div key={attendee.id} className="attendee-list-entry">
    <div className="attendee-list-entry-name">
      <div>
        {attendee.first_name} {attendee.last_name}
      </div>
      <div> {attendee.id}</div>
    </div>
    <div className="attendee-list-entry-info">
      <div>{attendee.username}</div>
      <div>{attendee.city}</div>
    </div>
  </div>
);

type AttendeesListProps = {
  attendees: Attendee[];
  onClick: (attendee: Attendee) => void
}

const AttendeesList: FC<AttendeesListProps> = ({ attendees, onClick }) => (
  <div className="attendee-list">
    <h1>Attendee List</h1>

    {attendees.map(attendee => (
      <div key={attendee.id} onClick={() => onClick(attendee)}>
        <AttendeeView attendee={attendee} />
      </div>
    ))}
  </div>
);

type WinnerProps = {
  attendee: Attendee;
}

const Winner: FC<WinnerProps> = ({ attendee }) => (
  <div>
    <div className="winner">
      <h1>Winner:</h1>
    </div>
    {attendee && <AttendeeView attendee={attendee} />}
  </div>
);

export const App = () => {
  const [winner, setWinner] = useState<Attendee | null>(null);
  return (
    <div className="app">
      <Navbar>
        <NavbarHeader>Navbar</NavbarHeader>

        <NavbarItem>A</NavbarItem>
        <NavbarItem>B</NavbarItem>
        <NavbarItem>C</NavbarItem>

        <NavbarFooter>Profile</NavbarFooter>
      </Navbar>
      <MainContent>
        {winner && <Winner attendee={winner} />}
        <AttendeesList attendees={attendees} onClick={setWinner} />
      </MainContent>
    </div>
  );
};
