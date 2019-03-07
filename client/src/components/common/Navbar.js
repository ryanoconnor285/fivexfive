import React from 'react';
import M from "materialize-css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
 
class Navbar extends React.Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

  handleLogout = (e) => {
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div>
        <li><Link to="/login" onClick={this.handleLogout}>Log Out</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </div>
    );

    const guestLinks = (
      <div>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/register">Register</Link></li>
      </div>
    );

    const menuStyle = {
      color: 'rgba(255, 255, 255, 1)'
    };

    return (
      <div className="row">
        <nav>
          <div className="nav-wrapper center-align grey darken-3">
            <button data-target="mobile-demo" className="waves-effect waves-white btn-flat sidenav-trigger hide-on-large-only"><i className="material-icons md-light" style={menuStyle}>menu</i></button>
            <Link to={isAuthenticated ? "/dashboard" : "/"} className="brand-logo center">Strength Training</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav>


        <ul className="sidenav" id="mobile-demo">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    );
  }
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});
 
export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);