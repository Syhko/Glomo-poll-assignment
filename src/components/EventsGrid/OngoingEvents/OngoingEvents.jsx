import React from "react";
import BetComponent from "./BetComponent";
import "./style.scss";

const OngoingEvents = ({ onGoingEvents }) => {
  return (
    <div className="ongoing-events-wrapper">
      <h1>Ongoing Events</h1>
      {onGoingEvents.map(event => (
        <BetComponent playerOne={event.homeName} playerTwo={event.awayName} />
      ))}
    </div>
  );
};

export default OngoingEvents;
