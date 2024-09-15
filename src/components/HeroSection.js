import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>PIXELPULSE STUDIOS</h1>
      <p>JOIN THE FUN</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
