import React from "react";
import "./style.scss";
import events from "../../data/test-assignment.json";
import BetComponent from "../../components/EventsGrid/SharedComponents/BetComponent";

const EventsContainer = () => {
  // creating an array of unique entries for all the different sports
  const allSports = [...new Set(events.events.map(event => event.sport))];
  // select a random value in the array above to initiate the first render
  const [defaultSport, setDefaultSport] = React.useState(
    allSports[Math.floor(Math.random() * allSports.length)]
  );
  const [randomEvent, setRandomEvent] = React.useState(
    events.events[Math.floor(Math.random() * events.events.length)]
  );

  const changeEvent = () => {
    setRandomEvent(
      events.events[Math.floor(Math.random() * events.events.length)]
    );
  };
  // Setting the 3 panels with data from the random value
  const [onGoing, setOnGoing] = React.useState(
    events.events
      .filter(event => event.state === "STARTED")
      .filter(event => event.sport === defaultSport)
  );
  // updating the 3 panels with the new sport selected
  const filteredSport = sport => {
    setOnGoing(
      events.events
        .filter(event => event.state === "STARTED")
        .filter(event => event.sport === sport)
    );
  };
  // updating the 3 panel with the country picked and the sport selected
  const filteredCountry = (sport, country) => {
    setOnGoing(
      events.events
        .filter(event => event.state === "STARTED")
        .filter(event => event.sport === sport)
        .filter(event => event.country === country)
    );
  };
  return (
    <div className="events-container">
      <div className="ongoing-events-wrapper">
        <h1>
          Bet on a random <span>{randomEvent.sport}</span> match in
          <span> {randomEvent.country}</span>
        </h1>
        <div className="bet-wrapper">
          <BetComponent
            key={randomEvent.id}
            playerOne={randomEvent.homeName}
            playerTwo={randomEvent.awayName}
            group={randomEvent.group}
            id={randomEvent.id}
            changeEvent={changeEvent}
            status={randomEvent.state}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsContainer;
