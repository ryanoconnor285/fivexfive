import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav>
      <div className="nav-wrapper center-align grey darken-3">
        <Link to="/" className="brand-logo">Dashboard</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Log In</Link></li>
          <li><Link to="/">Log Out</Link></li>
          <li><Link to="/">Profile</Link></li>
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;