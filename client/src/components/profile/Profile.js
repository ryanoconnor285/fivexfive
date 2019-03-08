import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeight: '',
      siUnits: '',
      deadlift: '',
      benchpress: '',
      squat: '',
      shoulderPress: '',
      row: ''
    }
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.errors) {
      this.setState({ errors: nextprops.errors })
    }

    if (nextprops.profile.profile) {
      const profile = nextprops.profile.profile;

      this.setState({
        currentWeight: profile.currentWeight,
        siUnits: profile.siUnits,
        deadlift: profile.deadlift,
        benchpress: profile.benchpress,
        squat: profile.squat,
        shoulderPress: profile.shoulderPress,
        row: profile.row
      });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let units;

    if (this.state.siUnits === "false") {
      units = false;
    } else {
      units = true;
    }

    const profileData = {
      currentWeight: this.state.currentWeight,
      siUnits: units,
      deadlift: this.state.deadlift,
      benchpress: this.state.benchpress,
      squat: this.state.squat,
      shoulderPress: this.state.shoulderPress,
      row: this.state.row
    }

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    return (
      <div className="edit-profile container">
        <div className="row">
          <div className="col s11">
            <table className="centered">
              <thead>
                <tr>
                  <th>Stats</th>
                  <th>Weight in {this.state.siUnits ? "kilograms" : "pounds"}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>{this.state.currentWeight}</td>
                </tr>
                <tr>
                  <td>Deadlift</td>
                  <td>{this.state.deadlift}</td>
                </tr>
                <tr>
                  <td>Bench Press</td>
                  <td>{this.state.benchpress}</td>
                </tr>
                <tr>
                  <td>Squat</td>
                  <td>{this.state.squat}</td>
                </tr>
                <tr>
                  <td>Shoulder Press</td>
                  <td>{this.state.shoulderPress}</td>
                </tr>
                <tr>
                  <td>Row</td>
                  <td>{this.state.row}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col s1">
            <Link className="btn-floating btn-large waves-effect waves-light" to="/edit-profile">
              <i className="material-icons  right-align">edit</i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(Profile));