import React from "react";
import "./style.scss";
import BetComponent from "../SharedComponents/BetComponent";

const IncomingEvents = ({ incomingEvents }) => {
  return (
    <div className="incoming-events-wrapper">
      <h1>Incoming</h1>
      <div>
        {incomingEvents.length !== 0 &&
          incomingEvents.map(event => (
            <BetComponent
              key={event.id}
              id={event.id}
              playerOne={event.homeName}
              playerTwo={event.awayName}
              group={event.group}
            />
          ))}
      </div>
      {incomingEvents.length === 0 && <h2>No events scheduled for later</h2>}
    </div>
  );
};

export default IncomingEvents;
