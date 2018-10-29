import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from "./components/App.js";

// Redux store
import { Provider } from 'react-redux'
import { configureStore } from './store'

const store = configureStore()

render((
  <Provider store={store}>
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/home" exact component={App} />
    </Switch>
  </Router>
  </Provider>
),
  document.getElementById('root')
);
