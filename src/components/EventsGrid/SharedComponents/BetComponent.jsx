import React from "react";
import "./style.scss";

const OngoingEvents = ({ playerOne, playerTwo, id, group }) => {
  const [isBetting, setIsBetting] = React.useState(false);
  // getting the data from local storage to populate the component
  const [betSelected, setBetSelected] = React.useState(
    localStorage.getItem(id) === undefined ? "" : localStorage.getItem(id)
  );
  // the bet saving system with local storage
  const betFunction = decision => {
    setBetSelected(decision);
    localStorage.setItem(id, decision);
  };

  return (
    <div
      className="bet-component-wrapper"
      onMouseEnter={() => setIsBetting(true)}
      onMouseLeave={() => setIsBetting(false)}
    >
      <div className="group-label">
        <p>{group}</p>
      </div>
      {!isBetting && (
        <>
          <p
            className={
              betSelected === "Home" ? "bet-player-selected" : "bet-player"
            }
          >
            {playerOne}
          </p>
          {betSelected === "Draw" && (
            <p className="bet-player-selected">Draw</p>
          )}
          <p
            className={
              betSelected === "Away" ? "bet-player-selected" : "bet-player"
            }
          >
            {playerTwo}
          </p>
        </>
      )}
      {isBetting && (
        <>
          <p className="bet" onClick={() => betFunction("Home")}>
            Home
          </p>
          <p className="bet" onClick={() => betFunction("Draw")}>
            Draw
          </p>
          <p className="bet" onClick={() => betFunction("Away")}>
            Away
          </p>
        </>
      )}
    </div>
  );
};

export default OngoingEvents;
