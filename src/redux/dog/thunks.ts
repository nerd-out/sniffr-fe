import axios from "axios"
import { getDog, getDogFailure, getDogSuccess, updateDog, updateDogFailure, updateDogSuccess, deleteDog, deleteDogFailure, deleteDogSuccess, createDog, createDogFailure, createDogSuccess } from "./actions"

interface DogThunkParams {
  payload: any;
}

function getDogThunk(dogThunkParams: DogThunkParams) {
  const { payload } = dogThunkParams;

  return async (dispatch: any, getState:any ) => {
    dispatch(getDog(payload.dogId))

    // Have to declare the response variable outside the try block
    let response;

    try {
      response = await axios.get(`/dog/${payload.dogId}`)
    } catch (error: any) {
      // Ensure we only catch network errors
      dispatch(getDogFailure(error.message))
      // Bail out early on failure
      console.log("error", error)

      return
    }
    console.log("response", response)
    // We now have the result and there's no error. Dispatch "fulfilled".
    dispatch(getDogSuccess(response.data))
  }
}

function updateDogThunk(dogThunkParams: DogThunkParams) {
  const { payload } = dogThunkParams;

  return async (dispatch: any, getState: any) => {
    dispatch(updateDog(payload))

    let response;

    try {
      response = await axios.post('/dog', { payload })
    } catch (error: any) {
      dispatch(updateDogFailure(error.message))
      return
    }

    dispatch(updateDogSuccess(response.data))
  }
}

function createDogThunk(dogThunkParams: DogThunkParams) {
  const { payload } = dogThunkParams;

  return async (dispatch: any, getState: any) => {
    dispatch(createDog(payload))

    let response;

    try {
      response = await axios.post('/dog', { payload })
    } catch (error: any) {
      dispatch(createDogFailure(error.message))
      return
    }

    dispatch(createDogSuccess(response.data))
  }
}

function deleteDogThunk(dogThunkParams: DogThunkParams) {
  const { payload } = dogThunkParams;

  return async (dispatch: any, getState: any) => {
    dispatch(deleteDog(payload))

    let response;

    try {
      response = await axios.post(`/dog/${payload.dogId}`)
    } catch (error: any) {
      dispatch(deleteDogFailure(error.message))
      return
    }
    console.log('response', response);
    dispatch(deleteDogSuccess())
  }
}

export { updateDogThunk, createDogThunk, deleteDogThunk, getDogThunk };