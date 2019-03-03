import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className="row">
        <div className="col m12 l4">
          <div className="card">
            <div className="card-image">
              <span className="card-title">Start a Workout</span>
            </div>
            <div className="card-content">
              <p>Continue where you left off.  Weight and progress will be tracked automatically.</p>
            </div>
            <div className="card-action">
              <Link to="/workouts">New Workout</Link>
            </div>
          </div>
        </div>
        <div className="col m12 l4">
          <div className="card">
            <div className="card-image">
              <span className="card-title">View Progress</span>
            </div>
            <div className="card-content">
              <p>View your strength gains over time.  Look back at recorded workouts.</p>
            </div>
            <div className="card-action">
              <Link to="/progress">View Progress</Link>
            </div>
          </div>
        </div>
        <div className="col m12 l4">
          <div className="card">
            <div className="card-image">
              <span className="card-title">Discover</span>
            </div>
            <div className="card-content">
              <p>Find new routines, exercises, tips and tricks to keep you on track and getting stronger.</p>
            </div>
            <div className="card-action">
              <Link to="/discover">Discover</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Landing;