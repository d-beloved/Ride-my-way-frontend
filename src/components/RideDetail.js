import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';


const RideDetail = ({ ride }) => {
  const {
    date, departurelocation, driverdetails, destination, message, rideid
  } = ride;
  if (!Object.keys(ride).length) return null;


  return (
    <Fragment>
      <div className="cardonly">
        <div className="toper">
          <h1>From {departurelocation} to {destination}</h1>
        </div>
        <div className="bottom1">
          <p>{message}</p>
          <p><span>Driver:</span> {driverdetails}</p>
          <p><span>Time:</span> {moment(date).format('LLLL')}</p>
          <div className="sign">
            <Link to={`/allrides/${rideid}`} className="sbutton">Join Ride</Link>
            <Link to={"/allrides"} className="sbutton">Other RIdes</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
RideDetail.propTypes = {
  ride: PropTypes.object.isRequired
};

export default RideDetail;
