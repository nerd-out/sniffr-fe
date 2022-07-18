import { CREATE_DOG, CREATE_DOG_FAILURE, CREATE_DOG_SUCCESS, DELETE_DOG, DELETE_DOG_FAILURE, DELETE_DOG_SUCCESS, GET_DOG, GET_DOG_FAILURE, GET_DOG_SUCCESS, UPDATE_DOG, UPDATE_DOG_FAILURE, UPDATE_DOG_SUCCESS } from "./constants";

export const updateDog = (payload) => ({
    type: UPDATE_DOG,
    payload: payload,
});

export const updateDogSuccess = (payload) => ({
    type: UPDATE_DOG_SUCCESS,
    payload: payload,
});

export const updateDogFailure = (error) => ({
    type: UPDATE_DOG_FAILURE,
    payload: error,
});

export const getDog = (payload) => ({
    type: GET_DOG,
    payload: payload,
});

export const getDogSuccess = (payload) => ({
    type: GET_DOG_SUCCESS,
    payload: payload,
});

export const getDogFailure = (error) => ({
    type: GET_DOG_FAILURE,
    payload: error,
});

export const createDog = (payload) => ({
    type: CREATE_DOG,
    payload: payload,
});

export const createDogSuccess = (payload) => ({
    type: CREATE_DOG_SUCCESS,
    payload: payload,
});

export const createDogFailure = (error) => ({
    type: CREATE_DOG_FAILURE,
    payload: error,
});

export const deleteDog = (payload) => ({
    type: DELETE_DOG,
    payload: payload,
});

export const deleteDogSuccess = () => ({
    type: DELETE_DOG_SUCCESS,
});

export const deleteDogFailure = (error) => ({
    type: DELETE_DOG_FAILURE,
    payload: error,
});