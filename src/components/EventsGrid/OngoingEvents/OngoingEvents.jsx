import React from "react";
import BetComponent from "../SharedComponents/BetComponent";
import "./style.scss";

const OngoingEvents = ({ onGoingEvents }) => {
  const countries = [...new Set(onGoingEvents.map(event => event.country))];
  return (
    <div className="ongoing-events-wrapper">
      <h1>Ongoing Events</h1>
      <div>
        {onGoingEvents.map(event => (
          <BetComponent
            key={event.id}
            playerOne={event.homeName}
            playerTwo={event.awayName}
            id={event.id}
          />
        ))}
      </div>
    </div>
  );
};

export default OngoingEvents;
