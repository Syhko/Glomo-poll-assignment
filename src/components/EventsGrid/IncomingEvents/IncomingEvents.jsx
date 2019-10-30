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
            />
          ))}
      </div>
    </div>
  );
};

export default IncomingEvents;
