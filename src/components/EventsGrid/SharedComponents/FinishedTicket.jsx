import React from "react";
import "./style.scss";

const DisplayTicket = ({ playerOne, playerTwo }) => {
  return (
    <div className="display-ticket-wrapper">
      <p className="bet-player">{playerOne}</p>
      <p className="bet-player">{playerTwo}</p>
    </div>
  );
};

export default DisplayTicket;
