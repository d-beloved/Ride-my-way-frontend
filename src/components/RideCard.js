import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

/**
 * @class Rides
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

    this.state = {};
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
            <Link to={`/allrides/${rideid}`} className="button">View details</Link>
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
