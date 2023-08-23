import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const handleServingChange = (e) => {
    setServings(e.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newFood = { name, image, calories, servings };
    addFood(newFood);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Serving</label>
      <Input value={servings} type="number" onChange={handleServingChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
