import React from 'react';

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
    }

    console.log(newUser)
  }

  render() { 
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
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="last_name">Last Name</label>
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
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="email">Email</label>
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
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="password">Password</label>
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
                  className="validate"
                  onChange={this.onChange}
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
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
 
export default Register;