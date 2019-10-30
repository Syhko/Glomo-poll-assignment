import React from "react";
import "./style.scss";
import DisplayTicket from "../SharedComponents/DisplayTicket";

const FinishedEvents = ({ finishedEvents }) => {
  return (
    <div className="finished-events-wrapper">
      <h1>Finished</h1>
      {finishedEvents.length !== 0 &&
        finishedEvents.map(event => (
          <DisplayTicket
            playerOne={event.homeName}
            playerTwo={event.awayName}
          />
        ))}
    </div>
  );
};

export default FinishedEvents;
