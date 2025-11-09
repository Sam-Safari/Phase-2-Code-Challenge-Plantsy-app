// src/components/App.js
import React, { useState } from 'react';
import PlantCard from './PlantCard';
import NewPlantForm from './NewPlantForm';

function App() {
  const [plants, setPlants] = useState([]);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <div>
      <h1>Plantsy</h1>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <ul>
        {plants.map((plant, index) => (
          <PlantCard key={index} plant={plant} />
        ))}
      </ul>
    </div>
  );
}

export default App;
