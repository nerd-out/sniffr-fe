import { createAction, createReducer } from '@reduxjs/toolkit';

const createDog = createAction('CREATE/DOG');
const updateDog = createAction('UPDATE/DOG');
const getDog = createAction('GET/DOG');
const deleteDog = createAction('DELETE/DOG');

const initialState: DogState = {
  name: null,
  sex: 'female',
  age: null,
  isVaccinated: false,
  breed: null,
  breedId: null,
  isFixed: false,
  bio: null,
  pic: null,
  temperament: null,
  size: null
};

const dogCru = (state: DogState, action: Action) => {
  state.name = action.payload.dog_name;
  state.sex = action.payload.sex;
  state.age = action.payload.age;
  state.isVaccinated = action.payload.is_vaccinated;
  state.breed = action.payload.breed;
  state.breedId = action.payload.breed_id;
  state.isFixed = action.payload.is_fixed;
  state.bio = action.payload.dog_bio;
  state.pic = action.payload.dog_pic;
  state.temperament = action.payload.temperament;
  state.size = action.payload.size;
};

export const dogReducer = createReducer(initialState, builder => {
  builder
    .addCase(createDog, dogCru)
    .addCase(updateDog, dogCru)
    .addCase(getDog, dogCru)
    .addCase(deleteDog, (state: DogState, action: Action) => {
      state.name = '';
      state.sex = 'female';
      state.age = null;
      state.isVaccinated = false;
      state.breed = null;
      state.breedId = null;
      state.isFixed = false;
      state.bio = null;
      state.pic = null;
      state.temperament = null;
      state.size = null;
    });
});
