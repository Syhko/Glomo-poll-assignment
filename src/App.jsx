import React from "react";
import "./App.scss";
import MenuBar from "./components/Navigation/MenuBar";
import EventsContainer from "./components/EventsGrid/EventsContainer";

const App = () => {
  return (
    <div>
      <MenuBar />
      <EventsContainer />
    </div>
  );
};

export default App;
