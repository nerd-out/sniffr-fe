import { createAction, createReducer } from '@reduxjs/toolkit';

const createSwipe = createAction('CREATE/SWIPE');
const getAvailableSwipes = createAction('GET/AVAILABLESWIPES');

const initialState = {
  past_swipes: [],
  available_swipes: [],
  current_swipe: null
};

export const swipesReducer = createReducer(initialState, builder => {
  builder
    .addCase(createSwipe, (state, action) => {
      state.past_swipes = state.past_swipes.push(action.payload.current_swipe);
      state.available_swipes = state.available_swipes.splice(0, 1);
      state.current_swipe = state.available_swipes[1] || [];
    })
    .addCase(getAvailableSwipes, (state, action) => {
      state.available_swipes = action.payload;
    });
});
