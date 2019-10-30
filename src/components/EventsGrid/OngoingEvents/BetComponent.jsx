import React from "react";
import "./style.scss";

const OngoingEvents = ({ playerOne, playerTwo }) => {
  return (
    <div className="bet-component-wrapper">
      <p className="bet-player">{playerOne}</p>
      <p className="versus">VS</p>
      <p className="bet-player">{playerTwo}</p>
    </div>
  );
};

export default OngoingEvents;
