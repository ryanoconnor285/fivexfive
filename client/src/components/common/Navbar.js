import React from 'react';
import M from "materialize-css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      let elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
  }

  render() {


    const menuStyle = {
      color: 'rgba(255, 255, 255, 1)'
    };

    return (
      <div>
        <nav>
          <div className="nav-wrapper center-align grey darken-3">
            <button data-target="mobile-demo" className="waves-effect waves-white btn-flat sidenav-trigger hide-on-large-only"><i className="material-icons md-light" style={menuStyle}>menu</i></button>
            <Link to="/" className="brand-logo">Dashboard</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/logout">Log Out</Link></li>
              <li><Link to="/profile">Profile</Link></li>
            </ul>
          </div>
        </nav>


        <ul className="sidenav" id="mobile-demo">
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    );
  }
}
 
export default Navbar;