import { createSlice } from '@reduxjs/toolkit';
import { addFood } from './foodSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    calories: 0,
    image: '',
    servings: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCalories(state, action) {
      state.calories = action.payload;
    },
    changeImage(state, action) {
      state.image = action.payload;
    },
    changeServings(state, action) {
      state.servings = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addFood, (state, action) => {
      state.name = '';
      state.calories = 0;
      state.image = '';
      state.servings = 0;
    });
  },
});

export const { changeName, changeCalories, changeImage, changeServings } =
  formSlice.actions;
export const formReducer = formSlice.reducer;
