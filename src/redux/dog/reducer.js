import { CREATE_DOG_SUCCESS, DELETE_DOG_SUCCESS, GET_DOG_SUCCESS, UPDATE_DOG_SUCCESS } from "./constants";

  
  const initialState = {
    name: null,
    sex: null,
    age: null,
    isVaccinated: null,
    breed: null,
    isFixed: null,
    bio: null,
    pic: null,
    temperament: null,
    size: null,
  };
  
  export const Dog = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_DOG_SUCCESS:
      case UPDATE_DOG_SUCCESS:
      case GET_DOG_SUCCESS:
        return {
          ...state,
          name: action.payload.name,
          sex: action.payload.sex,
          age: action.payload.age,
          isVaccinated: action.payload.is_vaccinated,
          breed: action.payload.breed,
          isFixed: action.payload.is_fixed,
          bio: action.payload.bio,
          pic: action.payload.pic,
          temperament: action.payload.temperament,
          size: action.payload.size,
        };
      case DELETE_DOG_SUCCESS:
        return {
            ...state,
            name: null,
            sex: null,
            age: null,
            isVaccinated: null,
            breed: null,
            isFixed: null,
            bio: null,
            pic: null,
            temperament: null,
            size: null,
        };
      default:
        return state;
    }
  };
  
  export default Dog;