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
import { swipesReducer } from './redux/swipes/reducer';
import { swipesApi } from './redux/swipes/swipesApi';
import theme from './theme';

const store = configureStore({
  reducer: {
    dogReducer,
    authReducer,
    swipesReducer,
    [dogApi.reducerPath]: dogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [swipesApi.reducerPath]: swipesApi.reducer
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      dogApi.middleware,
      authApi.middleware,
      swipesApi.middleware
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
