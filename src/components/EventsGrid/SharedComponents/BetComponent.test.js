import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import BetComponent from "./BetComponent";
import "../../../setupTests";

it("BetComponent should render with given props", () => {
  const playerOne = "player-one";
  const playerTwo = "player-two";
  const id = 10;
  const group = "group";
  const component = shallow(
    <BetComponent
      playerOne={playerOne}
      playerTwo={playerTwo}
      id={id}
      group={group}
      debug
    />
  );
  expect(component).toMatchSnapshot();
});
