import React, { Component } from 'react';
import Dashboard from './components/landing/Dashboard';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Workout from './components/workout/Workout';
import Progress from './components/progress/Progress';
import Discover from './components/discover/Discover';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Dashboard} />
          <Route path="/workout" component={Workout} />
          <Route path="/progress" component={Progress} />
          <Route path="/discover" component={Discover} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
