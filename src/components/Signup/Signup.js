import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpAction, clearErrors } from '../../actions/userActions';
import background from "../../../public/images/cabbie.jpg";

/**
 * @class Signup
 *
 * @classdesc register a user
 */
class SignUp extends Component {
  /**
   *
   * @param {Object} props the properties of the class component
   *
   * @return {void} no return void
   */
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      phoneno: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
/*eslint-disable */
  componentDidMount() {
    document.body.style.backgroundImage = "url(/images/cabbie.jpg)";
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = "url('')";
  }

  handleSubmit(event) {
    event.preventDefault();
    const { props } = this
    props.dispatch(signUpAction(this.state));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
    const { props } = this
    props.dispatch(clearErrors());
  }

  render() {
    const { firstname, lastname, phoneno, username, email, password } = this.state;
    const { error, signingUp } = this.props;
    if (localStorage.token) {
      this.props.history.push('/allrides');
    }
    return (
      this.state.redirectUser ?
        <Redirect to="/allrides" /> :
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
                  <li><Link to="/signin">Login</Link></li>
                </ul>
              </div>
            </nav>
          </header>

          <section className="section-form container">
            <div className="row card-form">
              {error ? <p className="invalidCredential">
                {error}</p> : null}
              <form onSubmit={this.handleSubmit} className="signup-form" id="signupForm" name="signupForm">

                <div className="form-group">
                  <input
                    name="firstname"
                    type="text"
                    id="firstname"
                    onChange={this.handleChange}
                    value={firstname}
                    className="form-control"
                    placeholder="Firstname"
                    required />
                </div>

                <div className="form-group">
                  <input
                    name="lastname"
                    type="text"
                    id="lastname"
                    onChange={this.handleChange}
                    value={lastname}
                    className="form-control"
                    placeholder="lastname"
                    required />
                </div>

                <div className="form-group">
                  <input
                    name="phoneno"
                    type="text"
                    id="phoneno"
                    onChange={this.handleChange}
                    value={phoneno}
                    className="form-control"
                    placeholder="Phone number"
                    maxLength="12"
                    required />
                </div>

                <div className="form-group">
                  <input
                    name="username"
                    type="text"
                    id="username"
                    onChange={this.handleChange}
                    value={username}
                    className="form-control"
                    placeholder="username"
                    required />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    onChange={this.handleChange}
                    value={email}
                    className="form-control"
                    placeholder="email"
                    required />
                </div>

                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                    value={password}
                    className="form-control"
                    placeholder="password"
                    required />
                </div>

                <div className="submit-btn">
                  <input
                    type="submit"
                    value={signingUp ? "" : "Create account"}
                    id="submitBtn"
                    className={signingUp ? "roller" : ''} />
                  <p className="form-info">
                    Already have an account ?
                    <Link to="/signin"> Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
    )
  }
}

SignUp.propTypes = {
  actions: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = (state) => {
  const { users } = state;
  return {
    user: users.user,
    signingUp: users.loading,
    error: users.error
  };
};

export default connect(mapStateToProps)(SignUp);
