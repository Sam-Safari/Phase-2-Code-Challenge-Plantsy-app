function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = React.useState({
    name: '',
    image: '',
    price: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent native submit (fixes JSDOM issue)
    onAddPlant(formData);
    setFormData({ name: '', image: '', price: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Plant name" value={formData.name} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;
