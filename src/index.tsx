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
import { matchesApi } from './redux/matches/matchesApi';
import { swipesApi } from './redux/swipes/swipesApi';
import theme from './theme';

const store = configureStore({
  reducer: {
    dogReducer,
    authReducer,
    [dogApi.reducerPath]: dogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [swipesApi.reducerPath]: swipesApi.reducer,
    [matchesApi.reducerPath]: matchesApi.reducer
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      dogApi.middleware,
      authApi.middleware,
      swipesApi.middleware,
      matchesApi.middleware
    )
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
