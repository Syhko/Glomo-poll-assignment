import React from "react";
import "./style.scss";
import DisplayTicket from "../SharedComponents/DisplayTicket";

const IncomingEvents = ({ incomingEvents }) => {
  return (
    <div className="incoming-events-wrapper">
      <h1>Incoming</h1>
      {incomingEvents.length !== 0 &&
        incomingEvents.map(event => (
          <DisplayTicket
            playerOne={event.homeName}
            playerTwo={event.awayName}
          />
        ))}
    </div>
  );
};

export default IncomingEvents;
