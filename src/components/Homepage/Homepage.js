import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import background from "../../../public/images/cabbie.jpg";

/**
 *  @class Homepage
 */
export default class Homepage extends Component {
/**
 * @description render - renders the component
 *
 * @return {object} returns an object
 */
/*eslint-disable */
  render() {
    return (
      <div className="content">
        <img src={background}
        className="bg" />
        <header>
          <nav className="container">
            <div className="row">
              <div className="header-logo">
                <Link
                  className="brand logo"
                  to="/">Ride-My-Way
                </Link>
                <button
                  type="button"
                  id="navbar-toggler"
                  className="nav-toggle">
                  <i className="mdi mdi-view-sequential"></i>
                </button>
              </div>
              <ul className="main-nav" id="navbar-collapse">
                <li><Link to="/allrides">All Rides</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="wrapper">
          <div className="landing">
            <h1>Ride My Way</h1>
            <p>...getting your Next Ride just got Super-easy</p><br />
            <Link
              className="btn-landing"
              to="/signup"> Let's Go!
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
