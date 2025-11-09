import React from 'react';

function PlantCard({ plant, onMarkSold }) {
  return (
    <li data-testid="plant-item" className="card">
      <h4>{plant.name}</h4>
      <img src={plant.image} alt={plant.name} />
      <p>${plant.price}</p>
      {plant.soldOut ? (
        <button disabled>Sold Out</button>
      ) : (
        <button onClick={() => onMarkSold(plant.id)}>Mark as Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
