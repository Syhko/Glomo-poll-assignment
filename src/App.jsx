import React from "react";
import MenuBar from "./components/Navigation/MenuBar";
import EventsContainer from "./components/EventsGrid/EventsContainer";
import HelpPopUp from "./components/Navigation/HelpPopUp";

const App = () => {
  // display the pop up if no local storage item found
  const [isPopUp, setIsPopUp] = React.useState(
    localStorage.getItem("popup") ? false : true
  );

  const closePopUp = () => {
    localStorage.setItem("popup", "close");
    setIsPopUp(false);
  };

  return (
    <div>
      <MenuBar />
      <EventsContainer />
      {isPopUp && <HelpPopUp handleClose={() => closePopUp()} />}
    </div>
  );
};

export default App;
