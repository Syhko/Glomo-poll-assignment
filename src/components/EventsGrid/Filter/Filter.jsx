import React from "react";
import "./style.scss";

const Filter = ({
  allSports,
  allEvents,
  defaultSport,
  handleSport,
  handleCountry
}) => {
  const [isSportOpen, setIsSportOpen] = React.useState(false);
  const [sportSelected, setSportSelected] = React.useState(defaultSport);
  const [isCountryOpen, setIsCountryOpen] = React.useState(false);
  const [countrySelected, setCountrySelected] = React.useState("Choose");
  const countries = [
    ...new Set(
      allEvents
        .filter(event => event.sport === sportSelected)
        .map(event => event.country)
    )
  ];
  const selectSport = sport => {
    setSportSelected(sport);
    setCountrySelected("Choose");
    setIsSportOpen(false);
    handleSport(sport);
  };
  const selectCountry = country => {
    setCountrySelected(country);
    setIsCountryOpen(false);
    handleCountry(sportSelected, country);
  };

  return (
    <div className="filter-wrapper">
      <div className="sport-filter">
        <h1 onClick={() => setIsSportOpen(!isSportOpen)}>
          <span>Sport</span> {sportSelected}
          {!isSportOpen && <span> &#9660;</span>}
          {isSportOpen && <span> &#9650;</span>}
        </h1>
        {isSportOpen && (
          <div className="dropdown">
            {allSports.map(sport => (
              <p onClick={() => selectSport(sport)}>{sport}</p>
            ))}
          </div>
        )}
      </div>
      <div className="sport-filter">
        <h1 onClick={() => setIsCountryOpen(!isCountryOpen)}>
          <span>Country</span> {countrySelected}
          {!isCountryOpen && <span> &#9660;</span>}
          {isCountryOpen && <span> &#9650;</span>}
        </h1>
        {isCountryOpen && (
          <div className="dropdown">
            {countries.map(country => (
              <p onClick={() => selectCountry(country)}>{country}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
