import React from "react";
import "../../App.css";
import "./Game&Company.css";
import Entity from "../Entity";
import ea from "../../assets/images/ea.png";
import activision from "../../assets/images/activision.png";
import capcom from "../../assets/images/capcom.jpeg";

export default function Companies() {
  const companies = [
    { image: ea, description: "EA Company" },
    { image: activision, description: "ACTIVISON" },
    { image: capcom, description: "CAPCOM" },
  ];

  return (
    <div className="entities">
      <h1 className="entity__title">Our Contracted Companies</h1>
      <div className="entity__container">
        {companies.map((company, index) => (
          <Entity
            key={index}
            image={company.image}
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
}
