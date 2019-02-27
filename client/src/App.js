import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Dashboard from './components/landing/Dashboard';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Workout from './components/workouts/Workout';
import Progress from './components/progress/Progress';
import Discover from './components/discover/Discover';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route path="/workouts" component={Workout} />
            <Route path="/progress" component={Progress} />
            <Route path="/discover" component={Discover} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
