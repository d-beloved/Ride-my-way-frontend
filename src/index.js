import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import App from "./components/App";
import configureStore from './store';
import { setCurrentUser, logoutAction } from './actions/userActions';
import isUserLoggedin from './utils';
import '../public/styles/main.css';
import '../public/styles/normalize.css';
import '../public/styles/style.css';
import '../public/styles/ridescard.css';

const store = configureStore();

if (isUserLoggedin()) {
  store.dispatch(setCurrentUser());
} else {
  store.dispatch(logoutAction());
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
