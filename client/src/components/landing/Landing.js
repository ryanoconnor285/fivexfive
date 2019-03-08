import React from 'react';
import parallaxImage1 from '../../images/pexels-photo-305239.jpeg';
import parallaxImage2 from '../../images/bodybuilding-close-up-dumbbells-260352.jpg';
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Landing extends React.Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    document.addEventListener('DOMContentLoaded', () => {
      let parallax = document.querySelectorAll('.parallax');
      M.Parallax.init(parallax);
    });
  }

  render() {
    return (
      <div> 
        <div className="parallax-container">
          <div className="">
            <img src={parallaxImage1} alt='lifting heavy' />
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            <Link to="/login">Log In</Link>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src={parallaxImage2} alt='lifting heavy' />
          </div>
        </div>
      </div>
    );
  }
};

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Landing);