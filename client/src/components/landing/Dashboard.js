import React from 'react';
import image1 from '../../images/pexels-photo-669576.jpeg';
import image2 from '../../images/sports-fitness-body-building-iron-161557.jpeg';
import image3 from '../../images/pexels-photo-416717.jpeg';
import Profile from '../profile/Profile';
import Preloader from '../common/Preloader';

import { getCurrentProfile } from '../../actions/profileActions';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let registrationPrompt;

    if (profile === null || loading) {
      registrationPrompt = <Preloader />;
    } else {
      // Check if logged in user has profile data
      if ((typeof profile === 'object' && Object.keys(profile).length > 0)) {
        registrationPrompt = null;
      } else {
        // User is logged in but has no profile
        registrationPrompt = (
          <div>
            <p className="lead text-muted">Welcome {user.firstName}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div>
      {registrationPrompt}
        <div className="row">
          <div className="col m12 l4">
            <div className="card">
              <div className="card-image">
                <img src={image2} alt="weight plates" />
                <span className="card-title">Start a Workout</span>
              </div>
              <div className="card-content">
                <p>Continue where you left off.  Weight and progress will be tracked automatically.</p>
              </div>
              <div className="card-action">
                <Link to="/workouts">New Workout</Link>
              </div>
            </div>
          </div>
          <div className="col m12 l4">
            <div className="card">
              <div className="card-image">
                <img src={image1} alt="weight plates" />
                <span className="card-title">View Progress</span>
              </div>
              <div className="card-content">
                <p>View your strength gains over time.  Look back at recorded workouts.</p>
              </div>
              <div className="card-action">
                <Link to="/progress">View Progress</Link>
              </div>
            </div>
          </div>
          <div className="col m12 l4">
            <div className="card">
              <div className="card-image">
                <img src={image3} alt="weight plates" />
                <span className="card-title">Discover</span>
              </div>
              <div className="card-content">
                <p>Find new routines, exercises, tips and tricks to keep you on track and getting stronger.</p>
              </div>
              <div className="card-action">
                <Link to="/discover">Discover</Link>
              </div>
            </div>
          </div>
        </div>
        <Profile />
        <div style={{ marginBottom: '60px' }} />
      </div>
    );
  }
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    profile: state.profile
  }
}

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);