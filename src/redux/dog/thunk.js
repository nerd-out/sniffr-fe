import axios from "axios"
import { getDog, getDogFailure, getDogSuccess, updateDog, updateDogFailure, updateDogSuccess, deleteDog, deleteDogFailure, deleteDogSuccess, createDog, createDogFailure, createDogSuccess } from "./actions"

function getDogThunk({ payload }) {
    return async (dispatch, getState) => {
      dispatch(getDog(payload.dogId))
  
      // Have to declare the response variable outside the try block
      let response
  
      try {
        response = await axios.get(`/dog/${payload.dogId}`)
      } catch (error) {
        // Ensure we only catch network errors
        dispatch(getDogFailure(error.message))
        // Bail out early on failure
        return
      }
  
      // We now have the result and there's no error. Dispatch "fulfilled".
      dispatch(getDogSuccess(response.data))
    }
  }

  function updateDogThunk({ payload }) {
    return async (dispatch, getState) => {
      dispatch(updateDog(payload))
  
      let response
  
      try {
        response = await axios.post('/dog', { payload })
      } catch (error) {
        dispatch(updateDogFailure(error.message))
        return
      }
  
      dispatch(updateDogSuccess(response.data))
    }
  }

  function createDogThunk({ payload }) {
    return async (dispatch, getState) => {
      dispatch(createDog(payload))
  
      let response
  
      try {
        response = await axios.post('/dog', { payload })
      } catch (error) {
        dispatch(createDogFailure(error.message))
        return
      }
  
      dispatch(createDogSuccess(response.data))
    }
  }

  function deleteDogThunk({ payload }) {
    return async (dispatch, getState) => {
      dispatch(deleteDog(payload))
  
      let response
  
      try {
        response = await axios.post(`/dog/${payload.dogId}`)
      } catch (error) {
        dispatch(deleteDogFailure(error.message))
        return
      }
  
      dispatch(deleteDogSuccess())
    }
  }

  export { updateDogThunk, createDogThunk, deleteDogThunk, getDogThunk };