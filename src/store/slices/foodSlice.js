import { createSlice, nanoid } from '@reduxjs/toolkit';

const foodSlice = createSlice({
  name: 'food',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addFood(state, action) {
      state.data.push({
        name: action.payload.name,
        calories: action.payload.calories,
        image: action.payload.image,
        servings: action.payload.servings,
        id: nanoid(),
      });
    },
    removeFood(state, action) {
      const updated = state.data.filter((food) => {
        return food.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addFood, removeFood } = foodSlice.actions;
export const foodReducer = foodSlice.reducer;
