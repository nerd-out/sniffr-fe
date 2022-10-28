import { createAction, createReducer } from '@reduxjs/toolkit';

const loginAuth = createAction('LOGIN/AUTH');
const registerAuth = createAction('REGISTER/AUTH');

const initialState: AuthState = {
  email: '',
  password: ''
};

export const authReducer = createReducer(initialState, builder => {
  builder
    .addCase(loginAuth, (state: AuthState, action: Action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    })
    .addCase(registerAuth, (state: AuthState, action: Action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    });
});
