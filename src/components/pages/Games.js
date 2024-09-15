import React from "react";
import "../../App.css";
import "./Game&Company.css";
import Entity from "../Entity";
import gta from "../../assets/images/gta.jpeg";
import candycrush from "../../assets/images/candycrush.jpeg";
import mobilelegends from "../../assets/images/mobile legends.jpg";
import csgo from "../../assets/images/csgo.jpg";
import sims from "../../assets/images/sims.jpeg";
import pubg from "../../assets/images/pubg.jpg";

export default function Games() {
  const games = [
    { image: gta, description: "GRAND THEFT AUTO - GTA" },
    { image: candycrush, description: "CANDY CRUSH SAGA" },
    { image: mobilelegends, description: "MOBILE LEGENDS" },
    { image: csgo, description: "COUNTER STRIKE GLOBAL OFFENSIVE - CS-GO" },
    { image: sims, description: "SIMS 4" },
    { image: pubg, description: "PUBG" },
  ];

  return (
    <div className="entities">
      <h1 className="entity__title">Our Games</h1>
      <div className="entity__container">
        {games.map((game, index) => (
          <Entity
            key={index}
            image={game.image}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
}
