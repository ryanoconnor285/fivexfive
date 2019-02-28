import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextprops) {
    if(nextprops.errors) {
      this.setState({ errors: nextprops.errors });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() { 
    const { errors } = this.state;

    return ( 
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input 
                  placeholder="First Name" 
                  name="firstName"
                  value={this.state.firstName}
                  id="first_name" 
                  type="text" 
                  className={errors.firstName ? "invalid" : "validate"}
                  onChange={this.onChange}
                />
                <label htmlFor="first_name">First Name</label>
                <span>{errors.firstName ? errors.firstName : null}</span>
              </div>
              <div className="input-field col s6">
                <input
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  id="last_name"
                  type="text"
                  className={errors.lastName ? "invalid" : "validate"}
                  onChange={this.onChange}
                />
                <label htmlFor="last_name">Last Name</label>
                <span>{errors.lastName ? errors.lastName : null}</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  id="email"
                  type="email"
                  className={errors.email ? "invalid" : "validate"}
                  onChange={this.onChange}
                />
                <label htmlFor="email">Email</label>
                <span>{errors.email ? errors.email : null}</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  id="password"
                  type="password"
                  className={errors.password ? "invalid" : "validate"}
                  onChange={this.onChange}
                />
                <label htmlFor="password">Password</label>
                <span>{errors.password ? errors.password : null}</span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  id="confirmPassword"
                  type="password"
                  className={errors.confirmPassword ? "invalid" : "validate"}
                  onChange={this.onChange}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <span>{errors.confirmPassword ? errors.confirmPassword : null}</span>
              </div>
            </div>
            <button 
            className="btn waves-effect waves-light" 
            type="submit" 
            name="action"
            >
            Submit
            <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div> 
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});
 
export default connect(mapStateToProps, { registerUser })(withRouter(Register));