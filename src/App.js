import React from 'react';
import PlantCard from './PlantCard';
import NewPlantForm from './NewPlantForm';

function App() {
  const [plants, setPlants] = React.useState([]);

  function addPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then(res => res.json())
      .then(savedPlant => setPlants([...plants, savedPlant]));
  }

  function markSold(id) {
    setPlants(plants.map(p => p.id === id ? { ...p, soldOut: true } : p));
  }

  return (
    <div className="app">
      <NewPlantForm onAddPlant={addPlant} />
      <ul className="cards">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} onMarkSold={markSold} />
        ))}
      </ul>
    </div>
  );
}

export default App;
