import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";

function App() {
  const [plants, setPlants] = useState([]); // initialize as empty array

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlants(data); // only set if data is array
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

  return (
    <div className="app">
      <NewPlantForm setPlants={setPlants} />
      <ul>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </ul>
    </div>

  );
}

export default App;
