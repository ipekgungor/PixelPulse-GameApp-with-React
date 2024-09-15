import React from "react";
import "./Entity.css";

export default function Entity(props) {
  return (
    <div className="entity">
      <img
        src={props.image}
        alt={props.description}
        className="entity__image"
      />
      <p className="entity__description">{props.description}</p>
    </div>
  );
}
