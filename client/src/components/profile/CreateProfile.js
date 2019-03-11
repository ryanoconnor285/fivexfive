import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends React.Component {
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

  componentWillReceiveProps(nextprops) {
    if(nextprops.errors) {
      this.setState({ errors: nextprops.errors})
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
    return (
      <div className="create-profile container">
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="currentWeight"
                  name="currentWeight"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="currentWeight">Current Body Weight</label>
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
                  type="text"
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
                  type="text"
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
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="benchpress">Bench Press</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="shoulderPress"
                  name="shoulderPress"
                  value={this.state.value}
                  type="text"
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
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="row">Row</label>
              </div>
            </div>
            <button className="btn-large" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.profile,
    errors: state.errors
  }
}

export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));