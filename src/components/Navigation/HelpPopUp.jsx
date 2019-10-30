import React from "react";
import "./style.scss";

const HelpPopUp = ({ handleClose }) => {
  return (
    <div className="pop-up-wrapper">
      <div className="close-pop-up" onClick={() => handleClose()}>
        X
      </div>
      <div className="pop-up-content">
        Welcome to Poll App!
        <br />
        <br />
        Start betting on some events by hovering the games
      </div>
    </div>
  );
};

export default HelpPopUp;
