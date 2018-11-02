import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRide, clearErrors } from '../actions/ridesAction';
import { logoutAction } from '../actions/userActions';
import background from "../../public/images/cabbie.jpg";

/**
 * @class CreateRide
 *
 * @classdesc creates a ride offer
 */
class CreateRide extends Component {
  /**
   *
   * @param {Object} props the properties of the class component
   *
   * @return {void} no return void
   */
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      destination: "",
      departurelocation: "",
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  /*eslint-disable*/
  componentDidMount() {
    document.body.style.backgroundImage = "url(/images/cabbie.jpg)";
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = "url('')";
  }

  handleSubmit(event) {
    event.preventDefault();
    const { props } = this
    props.dispatch(createRide(this.state))
      .then((data) => {
        if (data.success === true) {
          location.pathname = "/allrides";
        }
      })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
    const { props } = this
    props.dispatch(clearErrors());
  }

  handleLogout(event) {
    this.props.dispatch(logoutAction())
  }

  render() {
    const { message, departurelocation, destination, date } = this.state;
    const { error, creatingRide } = this.props;

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
              </div>
              <ul className="main-nav" id="navbar-collapse">
                <li><Link to="/allrides">All Rides</Link></li>
                <li onClick={this.handleLogout}>Logout</li>
              </ul>
            </div>
          </nav>
        </header>

        <section className="section-form container">
          <div className="row card-form">
            {error ? <p className="invalidCredential">
              {error}</p> : null}
            <form onSubmit={this.handleSubmit} className="signup-form" id="createRide">

              <div className="form-group">
                <input
                  name="message"
                  type="text"
                  id="message"
                  onChange={this.handleChange}
                  value={message}
                  className="form-control"
                  placeholder="Drop a message (e.g an highlight of your destination)"
                  required />
              </div>

              <div className="form-group">
                <input
                  name="departurelocation"
                  type="text"
                  id="departurelocation"
                  onChange={this.handleChange}
                  value={departurelocation}
                  className="form-control"
                  placeholder="From (place of departure)"
                  required />
              </div>

              <div className="form-group">
                <input
                  name="destination"
                  type="text"
                  id="destination"
                  onChange={this.handleChange}
                  value={destination}
                  className="form-control"
                  placeholder="To (your destination)"
                  required />
              </div>

              <div className="form-group">
                <input
                  name="date"
                  type="text"
                  id="date"
                  onChange={this.handleChange}
                  value={date}
                  className="form-control"
                  placeholder="please enter the date of departure in this format yyyy-mm-dd"
                  pattern="(?:20|21)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                  required />
              </div>

              <div className="submit-btn">
                <input
                  type="submit"
                  value="Create Ride offer"
                  id="submitBtn"
                  className={creatingRide ? "disabled_btn" : ''} />
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

CreateRide.propTypes = {
  actions: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    error: state.createRide.error,
    creatingRide: state.createRide.isLoading
  };
};

export default connect(mapStateToProps)(CreateRide);
