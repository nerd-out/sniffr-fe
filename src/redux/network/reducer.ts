import { DOG } from "../dog/constants";

const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

// This page allows us to skip manually adding in error/loading states to each reducer 
// whenever you make new variables in constants.js, import the action name and update INIT_STATE with:
// [<ACTION_TYPE_NAME>]: { isLoading: false, error: null }
const initialState = {
    [DOG]: {
        isLoading: false,
        error: null,
    },
};

// this is the reducer
const NetworkState = (state = initialState, action: Action) => {
    const { type } = action;
    // action type formatting in regex
    const regex = /(GET|UPDATE|CREATE|DELETE)?\/?(\w+)\/?(SUCCESS|FAILURE)?/g;
    // this takes the action type string and makes sure it's formatted correctly
    const networkAction = regex.exec(type);

    // if the action isn't formatted correctly, this function stops here. 
    // I added in a console.log to make it easier for us to debug if we have 
    // a typo in our actions. We'll remove this console.log later.
    if (!networkAction) {
        console.log("ACTION FORMAT ERROR: Check actions.js and make sure the action is formatted correctly. Correct formatting looks like: GET|UPDATE|CREATE|DELETE/<ACTION_NAME>/SUCCESS|FAILURE.");
        return state;
    }

    // destructure action type
    const [_, __, actionType, status] = networkAction;
    console.log('_', _);
    console.log('__', __);

    // this is what gives us our loading / error states 
    // success gives us no error / no loading 
    // failure gives us an error / no loading 
    // default gives us no error / yes loading
    switch (status) {
        case SUCCESS: 
            return {
                ...state,
                [actionType]: {
                    isLoading: false,
                    error: null, 
                },
            };
        case FAILURE: 
            return {
                ...state,
                [actionType]: {
                    isLoading: false,
                    networkActionType: action.payload.error,
                },
            };
        default:
            return {
                ...state,
                [actionType]: {
                    isLoading: true,
                    error: null,
                },
            };
    }
};


export default NetworkState;