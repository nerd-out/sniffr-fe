import { ThemeProvider } from '@mui/material';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { authApi } from './redux/auth/authApi';
import { authReducer } from './redux/auth/reducer';
import { dogApi } from './redux/dog/dogApi';
import { dogReducer } from './redux/dog/reducer';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const store = configureStore({
  reducer: {
    dogReducer,
    authReducer,
    [dogApi.reducerPath]: dogApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dogApi.middleware, authApi.middleware)
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
