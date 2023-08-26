import { useDispatch, useSelector } from 'react-redux';
import { Divider, Input } from 'antd';

import {
  changeName,
  changeImage,
  changeCalories,
  changeServings,
  addFood,
} from '../store';

function AddFoodForm() {
  const dispatch = useDispatch();
  const { name, image, calories, servings } = useSelector((state) => {
    return {
      name: state.form.name,
      image: state.form.image,
      calories: state.form.calories,
      servings: state.form.servings,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleImageChange = (event) => {
    dispatch(changeImage(event.target.value));
  };

  const handleCaloriesChange = (event) => {
    dispatch(changeCalories(event.target.value));
  };

  const handleServingsChange = (event) => {
    dispatch(changeServings(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addFood({ name, image, calories, servings }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
