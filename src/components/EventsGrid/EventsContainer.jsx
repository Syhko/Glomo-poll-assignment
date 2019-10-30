import React from "react";
import "./style.scss";
import Filter from "./Filter/Filter";
import FinishedEvents from "./FinishedEvents/FinishedEvents";
import OngoingEvents from "./OngoingEvents/OngoingEvents";
import IncomingEvents from "./IncomingEvents/IncomingEvents";
import events from "../../data/test-assignment.json";

const EventsContainer = ({}) => {
  const allSports = [...new Set(events.events.map(event => event.sport))];
  const allCountries = [...new Set(events.events.map(event => event.country))];
  const [defaultSport, setDefaultSport] = React.useState(
    allSports[Math.floor(Math.random() * allSports.length)]
  );

  const [onGoing, setOnGoing] = React.useState(
    events.events
      .filter(event => event.state === "STARTED")
      .filter(event => event.sport === defaultSport)
  );
  const [finished, setFinished] = React.useState(
    events.events
      .filter(event => event.state === "FINISHED")
      .filter(event => event.sport === defaultSport)
  );
  const [incoming, setIncoming] = React.useState(
    events.events
      .filter(event => event.state === "NOT_STARTED")
      .filter(event => event.sport === defaultSport)
  );

  const filteredSport = sport => {
    setOnGoing(
      events.events
        .filter(event => event.state === "STARTED")
        .filter(event => event.sport === sport)
    );
    setFinished(
      events.events
        .filter(event => event.state === "FINISHED")
        .filter(event => event.sport === sport)
    );
    setIncoming(
      events.events
        .filter(event => event.state === "NOT_STARTED")
        .filter(event => event.sport === sport)
    );
  };

  const filteredCountry = (sport, country) => {
    setOnGoing(
      events.events
        .filter(event => event.state === "STARTED")
        .filter(event => event.sport === sport)
        .filter(event => event.country === country)
    );
    setFinished(
      events.events
        .filter(event => event.state === "FINISHED")
        .filter(event => event.sport === sport)
        .filter(event => event.country === country)
    );
    setIncoming(
      events.events
        .filter(event => event.state === "NOT_STARTED")
        .filter(event => event.sport === sport)
        .filter(event => event.country === country)
    );
  };

  return (
    <div className="events-container">
      <Filter
        allSports={allSports}
        allEvents={events.events}
        defaultSport={defaultSport}
        handleSport={sport => filteredSport(sport)}
        handleCountry={(sport, country) => filteredCountry(sport, country)}
      />
      <OngoingEvents onGoingEvents={onGoing} />
      <FinishedEvents finishedEvents={finished} />
      <IncomingEvents incomingEvents={incoming} />
    </div>
  );
};

export default EventsContainer;
