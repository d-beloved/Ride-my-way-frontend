import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getOneRide } from '../actions/ridesAction';
import RideDetail from './RideDetail';
import background from '../../public/images/cabbie.jpg';
import Loader from './Loader';

/*eslint-disable*/
class OneRide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
   // get rideId from url params
   const { match, fetchOneRide, ride } = this.props;
   const { rideid } = match.params;
   // get ride details and render
   if (ride.rideid == rideid) {
     return;
   }
    fetchOneRide(rideid);
  }

  render() {
    const { ride, loading } = this.props;
    return (
      <div className="container">
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
              </div>
              <ul className="main-nav" id="navbar-collapse">
                <li><Link to="/createride">Offer Ride</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="onecard">
          {loading ? 
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
              <Loader size={'70px'} />
            </div>
              : <RideDetail ride={ride} /> }
        </div>
      </div>
    );
  }
}

OneRide.propTypes = {
  ride: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchOneRide: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  fetchOneRide(rideid) {
    return dispatch(getOneRide(rideid));
  }
});

const mapStateToProps = state => ({
  ride: state.oneRide.ride,
  loading: state.oneRide.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(OneRide);
