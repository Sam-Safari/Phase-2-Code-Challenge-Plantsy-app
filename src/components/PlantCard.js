import React from "react";

function PlantCard({ plant }) {
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>{plant.price}</p>
    </li>
  );
}

export default PlantCard;
