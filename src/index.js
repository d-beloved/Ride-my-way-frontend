import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from "./components/App.js";

render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/home" exact component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
