import React from "react";
import "./style.scss";
import FinishedTicket from "../SharedComponents/FinishedTicket";

const FinishedEvents = ({ finishedEvents }) => {
  return (
    <div className="finished-events-wrapper">
      <h1>Finished</h1>
      {finishedEvents.length !== 0 &&
        finishedEvents.map(event => (
          <FinishedTicket
            key={event.id}
            id={event.id}
            playerOne={event.homeName}
            playerTwo={event.awayName}
            group={event.group}
          />
        ))}
    </div>
  );
};

export default FinishedEvents;
