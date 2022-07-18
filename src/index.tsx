import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import Dog from './redux/dog/reducer';
import NetworkState from './redux/network/reducer';

import rootReducer from './redux/reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // @ts-ignore
  preloadedState: { Dog, NetworkState },
  // @ts-ignore
  enhancers: [applyMiddleware]
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
