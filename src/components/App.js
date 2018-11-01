import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import SignUp from './Signup/Signup';
import Signin from './Signin/Signin';
import AllRides from './AllRides';

/**
 * @class App
 */
class App extends Component {
  /**
   * @description render - the main App
   *
   * @return {Object} returns an object
   */
  /*eslint-disable*/
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/allrides" component={AllRides} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
