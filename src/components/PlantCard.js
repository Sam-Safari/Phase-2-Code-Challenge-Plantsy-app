import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true); // Default to in stock

  const handleStockToggle = () => {
    setInStock(!inStock);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img alt={plant.name} src={plant.image} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
