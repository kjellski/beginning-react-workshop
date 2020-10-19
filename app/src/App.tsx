import React, { FC, useState } from "react";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { Navbar } from "./components/Navbar";
import { NavbarFooter } from "./components/NavbarFooter";
import { NavbarHeader } from "./components/NavbarHeader";
import { NavbarItem } from "./components/NavbarItem";

const Stopwatch: FC = () => {
  const [time, setTime] = useState(new Date());
  const [timeDifference, setTimeDifference] = useState(0);

  const handleTakeTimeButtonClick = () => {
    const now = new Date();
    const newTimeDifference = now.getTime() - time.getTime();
    setTime(now);
    setTimeDifference(newTimeDifference);
  };

  return (
    <div>
      <h1>Now: {time.toLocaleTimeString()}</h1>
      <pre>Time since last take: {timeDifference}</pre>
      <button onClick={handleTakeTimeButtonClick}>Take Time!</button>
    </div>
  );
};

// TASK: Write a clock that updates its time every second. You can use
// the browser method setInterval(callback, intervalInMs) for this!

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
      <Stopwatch />
    </MainContent>
  </div>
);
