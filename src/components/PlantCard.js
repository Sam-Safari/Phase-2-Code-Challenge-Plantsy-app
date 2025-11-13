function PlantCard({ plant }) {
  return (
    <li className="card" data-testid="plant-item">
      <img alt={plant.name} src={plant.image} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button>{plant.inStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
