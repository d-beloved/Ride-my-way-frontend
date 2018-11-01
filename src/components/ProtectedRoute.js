import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * @classdesc protects a route
 */
class ProtectedRoute extends Component {
  /**
   *
   * @param {Object} props the porperties of the class component
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
/*eslint-disable */
  render() {
    const { component: ProtectedComponent, isAuthenticated, ...rest } = this.props
    return (
      <Route
        {...rest}

        render={props => (
          isAuthenticated
            ? <ProtectedComponent {...props} />
            : (
              <Redirect to={{
                pathname: '/signin',
                state: { from: props.location } // pass redirecter location to redirected component
              }}
              />
            )
        )}
      />
    );
  }
}

const mapStateToProps = ({ users }) => {
  const { isAuthenticated } = users;
  return {
    isAuthenticated,
  }
}

export default connect(mapStateToProps, null, null, { pure: false })(ProtectedRoute);
