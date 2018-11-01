import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllRides } from '../actions/ridesAction';
import Rides from './RideCard';
import background from "../../public/images/cabbie.jpg";
import Loader from './Loader';

/**
 * @class AllRides
 *
 * @classdesc All rides page component
 */
class AllRides extends Component {
  /**
   *
   * @param {object} props the properties of the class component
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  /**
  * @description - gets all rides
  *
  * @return {void} no return or void
  */
  componentDidMount() {
    this.setState({
      loader: true
    });
    this.props.actions.getAllRides()
      .then(() => {
        this.setState({
          loader: false
        });
      });
  }

  /**
   * @description renders rides details
   *
   * @returns {object} returns an object
   */
  renderRides() {
    console.log(this.props);
    const allRides = this.props.rides;
    if (allRides.length < 1) {
      return (
        <div className="not-found">
          <h1> No Rides found, please check back later </h1>
        </div>
      );
    }
    return (<div className="row rides">
      {
        allRides.map(ride => (
          <Rides
            key={ride.rideid}
            rideid={ride.rideid}
            date={ride.date}
            departurelocation={ride.departurelocation}
            destination={ride.departurelocation}
            message={ride.message}
            driverdetails={ride.driverdetails}
          />
        ))
      }
    </div>);
  }

  /**
   * @description renders the all rides page
   *
   * @returns {object} returns an object
   */
  render() {
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
                <button
                  type="button"
                  id="navbar-toggler"
                  className="nav-toggle">
                  <i className="mdi mdi-view-sequential"></i> {/*eslint-disable-line*/}
                </button>
              </div>
              <ul className="main-nav" id="navbar-collapse">
                <li><Link to="/createride">Offer Ride</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <div>
          { this.state.loader ?
            <div style={{ marginTop: '80px', textAlign: 'center' }}>
              <Loader size={'70px'} />
            </div> :
            <div>
              <h3 style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
                All Rides </h3>
              {this.renderRides()}
            </div>
          }
        </div>
      </div>
    );
  }
}

/**
 *
 * @param {object} state the store state
 * @returns {object}  returns state object
 */
function mapStateToProps(state) {
  return {
    rides: state.allRides.data
  };
}

/**
 *
 * @param {Function} dispatch dispatchs function
 *
 * @returns {object}  returns state object
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getAllRides
    }, dispatch)
  };
}

AllRides.propTypes = {
  actions: PropTypes.object,
  error: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(AllRides);
