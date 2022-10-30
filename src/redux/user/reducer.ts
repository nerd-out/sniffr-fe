import { createAction, createReducer } from '@reduxjs/toolkit';

// Create user is handled from the "signup" form
// Users cannot delete themselves at this time
const updateUser = createAction('UPDATE/USER');
const getUser = createAction('GET/USER');

const initialState = {
  email: null,
  name: null,
  age: 0,
  gender: null,
  user_pic: null,
  user_bio: null,
  zipcode: null,
  max_distance: 0
};

const userReadUpdate = (state, action) => {
  state.email = action.payload.email;
  state.name = action.payload.name;
  state.age = action.payload.age;
  state.gender = action.payload.gender;
  state.user_pic = action.payload.user_pic;
  state.user_bio = action.payload.bio;
  state.zipcode = action.payload.zipcode;
  state.max_distance = action.payload.max_distance;
};

export const userReducer = createReducer(initialState, builder => {
  builder.addCase(getUser, userReadUpdate).addCase(updateUser, userReadUpdate);
});
