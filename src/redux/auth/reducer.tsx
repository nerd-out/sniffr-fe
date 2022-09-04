import { createAction, createReducer } from '@reduxjs/toolkit';

const auth = createAction('LOGIN/AUTH');

const initialState: AuthState = {
  email: '',
  password: ''
};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(auth, (state: AuthState, action: Action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
      });
});
