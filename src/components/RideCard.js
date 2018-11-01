import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

/**
 * @class AllRides
 *
 * @classdesc Rides page component
 *
 */
class Rides extends Component {
  /**
   *
   * @param  {object} props the properties of the class component
   *
   * @return {void} no return or void
   *
   */
  constructor(props) {
    super(props);

    this.state = {
      redirectOnClick: false
    };
    this.handleViewClick = this.handleViewClick.bind(this);
  }

  /**
   * @description - handles the view click event
   *
   * @param  {object} event the event for the content field
   *
   * @return {void} no return or void
   */
  handleViewClick(event) {
    event.preventDefault();
    this.setState({ redirectOnClick: true });
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   */
  render() {
    const {
      date, departurelocation, driverdetails, destination, message, rideid
    } = this.props;

    return (
      this.state.redirectOnClick ?
        <Redirect to={`/allrides/${rideid}`} /> :
        <div className="card">
          <div className="top">
            <h1>{message}</h1>
          </div>
          <div className="bottom">
            <p><span>Driver:</span> {driverdetails}</p>
            <p><span>from</span> {departurelocation}</p>
            <p><span>To:</span> {destination}</p>
            <p><span>Time</span> {moment(date).format('LLLL')}</p>
            <div className="sign">
              <a onClick={this.handleViewClick} className="button">View details</a>
            </div>
          </div>
        </div>
    );
  }
}

Rides.propTypes = {
  rideid: PropTypes.number,
  date: PropTypes.string,
  departurelocation: PropTypes.string,
  destination: PropTypes.string,
  message: PropTypes.string,
  driverdetails: PropTypes.string,
};

export default Rides;
