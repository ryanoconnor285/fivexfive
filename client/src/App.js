import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import PrivateRoute from './components/common/PrivateRoute';

import Landing from './components/landing/Landing';
import Dashboard from './components/landing/Dashboard';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Workout from './components/workouts/Workout';
import Progress from './components/progress/Progress';
import Discover from './components/discover/Discover';
import Profile from './components/profile/Profile';
import CreateProfile from './components/profile/CreateProfile';
import EditProfile from './components/profile/EditProfile';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store'
import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Clear user's profile
    store.dispatch(clearCurrentProfile());
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            </Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route path="/workouts" component={Workout} />
            <Route path="/progress" component={Progress} />
            <Route path="/discover" component={Discover} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
