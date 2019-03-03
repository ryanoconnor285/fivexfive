import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Landing from './components/landing/Landing';
import Dashboard from './components/landing/Dashboard';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Workout from './components/workouts/Workout';
import Progress from './components/progress/Progress';
import Discover from './components/discover/Discover';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store'
import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set the auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode Token and get user infor and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() /1000;
  if(decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());
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
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
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
