import React from "react";
import jwt from 'jsonwebtoken';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import App from "./components/App";
import configureStore from './store';
import { SET_CURRENT_USER } from './actions/types';
import setAuthToken from './utils';

const store = configureStore();

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch({
    type: SET_CURRENT_USER,
    user: jwt.decode(localStorage.token)
  });
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
