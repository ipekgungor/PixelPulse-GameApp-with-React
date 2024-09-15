import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import games from "../assets/images/pcgames.jpg";
import companies from "../assets/images/gamecompanies.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Explore the game world</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={games}
              text="Explore the different game options"
              label="Games"
              path="/games"
            />
            <CardItem
              src={companies}
              text="Explore the different game companies"
              label="Companies"
              path="/companies"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
