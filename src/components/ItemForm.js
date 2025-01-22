import React, { useState } from 'react';

function ItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    if (name && category) {
      onAddItem({ name, category });
      setName(''); // Reset the form fields
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value="Dessert">Dessert</option>
        <option value="Beverage">Beverage</option>
        {/* Add other categories as needed */}
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;