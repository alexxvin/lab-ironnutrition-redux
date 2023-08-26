import { configureStore } from '@reduxjs/toolkit';
import {
  formReducer,
  changeName,
  changeCalories,
  changeImage,
  changeServings,
} from './slices/formSlice';
import {
  foodReducer,
  addFood,
  removeFood,
  changeSearchTerm,
} from './slices/foodSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    food: foodReducer,
  },
});

export {
  store,
  changeName,
  changeCalories,
  changeImage,
  changeServings,
  addFood,
  removeFood,
  changeSearchTerm,
};
