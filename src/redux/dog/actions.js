import { UPDATE_DOG, UPDATE_DOG_FAILURE, UPDATE_DOG_SUCCESS } from "./constants";

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