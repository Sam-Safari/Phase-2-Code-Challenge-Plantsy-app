// src/components/NewPlantForm.js
import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    scientificName: '',
    plantType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlant(formData);
    setFormData({ name: '', scientificName: '', plantType: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Plant Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="scientificName"
        placeholder="Scientific Name"
        value={formData.scientificName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="plantType"
        placeholder="Plant Type"
        value={formData.plantType}
        onChange={handleChange}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
