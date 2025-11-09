// src/components/PlantCard.js
import React from 'react';

function PlantCard({ plant }) {
  return (
    <li className="card">
      <h4>{plant.name}</h4>
      <p>{plant.scientificName}</p>
      <p>{plant.plantType}</p>
    </li>
  );
}

export default PlantCard;
