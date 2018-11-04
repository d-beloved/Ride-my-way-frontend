import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const RideDetail = ({
  ride,
  requesting,
  handleRequest
}) => {
  const {
    date, departurelocation, driverdetails, destination, message
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
            <input readOnly
              className={`sbutton tbutton ${requesting ? "roller" : ''}`}
              value={requesting ? "" : "Join Ride"}
              onClick={handleRequest}/>
            <Link to={"/allrides"} className="sbutton">Other RIdes</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
RideDetail.propTypes = {
  ride: PropTypes.object.isRequired,
  requesting: PropTypes.bool.isRequired,
  handleRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  requesting: state.requestRide.requesting,
});

export default connect(mapStateToProps)(RideDetail);
