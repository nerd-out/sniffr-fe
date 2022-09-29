import { createAction, createReducer } from '@reduxjs/toolkit';

const getSwipe = createAction('GET/SWIPE');

const initialState = {
  current_swipe: null
};

export const swipesReducer = createReducer(initialState, builder => {
  builder.addCase(getSwipe, (state, action) => {
    state.current_swipe = action.payload;
  });
});
