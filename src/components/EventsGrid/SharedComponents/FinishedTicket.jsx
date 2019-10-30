import React from "react";
import "./style.scss";

const DisplayTicket = ({ playerOne, playerTwo, group }) => {
  return (
    <div>
      <div className="display-ticket-wrapper">
        <div className="group-label">
          <p>{group}</p>
        </div>
        <p className="bet-player">{playerOne}</p>
        <p className="bet-player">{playerTwo}</p>
      </div>
    </div>
  );
};

export default DisplayTicket;
