import { CREATE_DOG, CREATE_DOG_FAILURE, CREATE_DOG_SUCCESS, DELETE_DOG, DELETE_DOG_FAILURE, DELETE_DOG_SUCCESS, GET_DOG, GET_DOG_FAILURE, GET_DOG_SUCCESS, UPDATE_DOG, UPDATE_DOG_FAILURE, UPDATE_DOG_SUCCESS } from "./constants";

export const updateDog = (payload: any) => ({
    type: UPDATE_DOG,
    payload: payload,
});

export const updateDogSuccess = (payload: any) => ({
    type: UPDATE_DOG_SUCCESS,
    payload: payload,
});

export const updateDogFailure = (error: any) => ({
    type: UPDATE_DOG_FAILURE,
    payload: error,
});

export const getDog = (payload: any): any => ({
    type: GET_DOG,
    payload: payload,
});

export const getDogSuccess = (payload: any) => ({
    type: GET_DOG_SUCCESS,
    payload: payload,
});

export const getDogFailure = (error: any) => ({
    type: GET_DOG_FAILURE,
    payload: error,
});

export const createDog = (payload: any) => ({
    type: CREATE_DOG,
    payload: payload,
});

export const createDogSuccess = (payload: any) => ({
    type: CREATE_DOG_SUCCESS,
    payload: payload,
});

export const createDogFailure = (error: any) => ({
    type: CREATE_DOG_FAILURE,
    payload: error,
});

export const deleteDog = (payload: any) => ({
    type: DELETE_DOG,
    payload: payload,
});

export const deleteDogSuccess = () => ({
    type: DELETE_DOG_SUCCESS,
});

export const deleteDogFailure = (error: any) => ({
    type: DELETE_DOG_FAILURE,
    payload: error,
});