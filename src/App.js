import React, { useEffect, useState } from "react";
import PlantCard from "./components/PlantCard";
import NewPlantForm from "./components/NewPlantForm";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlants(data);
        } else {
          console.error("Fetched data is not an array:", data);
          setPlants([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching plants:", err);
        setPlants([]);
      });
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <div className="app">
      <NewPlantForm onAddPlant={handleAddPlant} />

      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
  {filteredPlants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ))}
</ul>
    </div>
  );
}

export default App;