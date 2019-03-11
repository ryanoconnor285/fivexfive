import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile, getCurrentProfile } from '../../actions/profileActions';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeight: '',
      siUnits: '',
      deadlift: '',
      benchpress: '',
      squat: '',
      shoulderPress: '',
      row: '',
      formValid: true,
      errors: {}
    }
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.errors) {
      this.setState({ errors: nextprops.errors })
    }

    if(nextprops.profile.profile) {
      const profile = nextprops.profile.profile;

      this.setState ({
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

    const profileData = {
      currentWeight: this.state.currentWeight,
      siUnits: this.state.siUnits,
      deadlift: this.state.deadlift,
      benchpress: this.state.benchpress,
      squat: this.state.squat,
      shoulderPress: this.state.shoulderPress,
      row: this.state.row
    }

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="edit-profile container">
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="currentWeight"
                  name="currentWeight"
                  type="number"
                  onChange={this.onChange}
                />
                <label htmlFor="currentWeight">Current Body Weight</label>
                <span className="helper-text" data-error="wrong" data-success="right">{errors.currentWeight ? errors.currentWeight : null}</span>
              </div>
              <div className="col s6">
                Preferred units:
                <div className="row">
                  <div className="col s6">
                    <p>
                      <label>
                        <input
                          name="siUnits"
                          value="false"
                          type="radio"
                          onChange={this.onChange}
                        />
                        <span>Pounds</span>
                      </label>
                    </p>
                  </div>

                  <div className="col s6">
                    <p>
                      <label>
                        <input
                          name="siUnits"
                          value="true"
                          type="radio"
                          onChange={this.onChange}
                        />
                        <span>Kilograms</span>
                      </label>
                    </p>
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="deadlift"
                  name="deadlift"
                  value={this.state.value}
                  type="number"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="deadlift">Deadlift</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="benchpress"
                  name="benchpress"
                  value={this.state.value}
                  type="number"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="benchpress">Bench Press</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="squat"
                  name="squat"
                  value={this.state.value}
                  type="number"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="squat">Squat</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="shoulderPress"
                  name="shoulderPress"
                  value={this.state.value}
                  type="number"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="shoulderPress">Shoulder Press</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="row"
                  name="row"
                  value={this.state.value}
                  type="number"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="row">Row</label>
              </div>
            </div>
            <div className="row">
              <h5 className="helper-text large red lighten-2" data-error="wrong" data-success="right">{this.state.formValid ? null : "All weights must be numbers"}</h5>
            </div>
            <div className="row">
              <button className={this.state.formValid ? "btn-large" : "btn-large disabled"} type="submit">Edit Profile</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
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

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));