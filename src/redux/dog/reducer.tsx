import { createAction, createReducer } from '@reduxjs/toolkit';

interface DogState {
  name: string | null;
  sex: string;
  age: number | null;
  isVaccinated: boolean;
  breed: string | null;
  breedId: number | null;
  isFixed: boolean;
  bio: string | null;
  pic: string | null;
  // add these in once the tables are made in the BE 
  // temperament: string | null;
  // size: string;
};

interface Action {
  type: string;
  payload: any;
};

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
  // temperament: null,
  // size: null,
};

const dogCrud = (state: DogState, action: Action) => {
  state.name = action.payload.name;
  state.sex = action.payload.sex;
  state.age = action.payload.age;
  state.isVaccinated = action.payload.is_vaccinated;
  state.breed = action.payload.breed;
  state.isFixed = action.payload.is_fixed;
  state.bio = action.payload.bio;
  state.pic = action.payload.pic;
  // state.temperament = action.payload.temperament;
  // state.size = action.payload.size;
};

export const dogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createDog, dogCrud)
    .addCase(updateDog, dogCrud)
    .addCase(getDog, dogCrud)
    .addCase(deleteDog, dogCrud)
});