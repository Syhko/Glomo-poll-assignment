import React from "react";
import BetComponent from "../SharedComponents/BetComponent";
import "./style.scss";

const OngoingEvents = ({ onGoingEvents }) => {
  return (
    <div className="ongoing-events-wrapper">
      <h1>Ongoing Events</h1>
      <div>
        {onGoingEvents.map(event => (
          <BetComponent
            key={event.id}
            playerOne={event.homeName}
            playerTwo={event.awayName}
            group={event.group}
            id={event.id}
          />
        ))}
      </div>
      {onGoingEvents.length === 0 && <h2>No events playing right now</h2>}
    </div>
  );
};

export default OngoingEvents;
