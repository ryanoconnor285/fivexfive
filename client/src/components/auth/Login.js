import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(newUser)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
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

export default Login;