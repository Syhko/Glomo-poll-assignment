import React from "react";
import "./style.scss";
import Filter from "./Filter/Filter";
import FinishedEvents from "./FinishedEvents/FinishedEvents";
import OngoingEvents from "./OngoingEvents/OngoingEvents";
import IncomingEvents from "./IncomingEvents/IncomingEvents";
import events from "../../data/test-assignment.json";

const EventsContainer = ({}) => {
  const allSports = [...new Set(events.events.map(event => event.sport))];
  const [selectedSport, setSelectedSport] = React.useState("TENNIS");
  const [onGoing, setOnGoing] = React.useState(
    events.events
      .filter(event => event.state === "STARTED")
      .filter(event => event.sport === selectedSport)
  );
  const [finished, setFinished] = React.useState(
    events.events
      .filter(event => event.state === "FINISHED")
      .filter(event => event.sport === selectedSport)
  );
  const [incoming, setIncoming] = React.useState(
    events.events
      .filter(event => event.state === "NOT_STARTED")
      .filter(event => event.sport === selectedSport)
  );

  return (
    <div className="events-container">
      <Filter
        allSports={allSports}
        defaultSport={"TENNIS"}
        handleSport={sport => setSelectedSport(sport)}
      />
      <OngoingEvents onGoingEvents={onGoing} />
      <FinishedEvents finishedEvents={finished} />
      <IncomingEvents incomingEvents={incoming} />
    </div>
  );
};

export default EventsContainer;
