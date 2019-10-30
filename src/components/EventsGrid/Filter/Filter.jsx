import React from "react";
import "./style.scss";

const Filter = ({ allSports, defaultSport, handleSport }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [sportSelected, setSportSelected] = React.useState(defaultSport);
  const selectSport = sport => {
    setSportSelected(sport);
    setIsOpen(false);
    handleSport(sport);
  };
  return (
    <div className="filter-wrapper">
      <div className="sport-filter">
        <h1 onClick={() => setIsOpen(!isOpen)}>
          {sportSelected}
          {!isOpen && <span> &#9660;</span>}
          {isOpen && <span> &#9650;</span>}
        </h1>
        {isOpen && (
          <div className="dropdown">
            {allSports.map(sport => (
              <p onClick={() => selectSport(sport)}>{sport}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
