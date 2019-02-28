import React from 'react';
import image1 from '../../images/pexels-photo-669576.jpeg';
import image2 from '../../images/sports-fitness-body-building-iron-161557.jpeg';
import image3 from '../../images/pexels-photo-416717.jpeg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>  
      <div className="row">
        <div className="col m12 l4">
          <div className="card">
            <div className="card-image">
              <img src={image2} alt="weight plates"/>
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
              <img src={image1} alt="weight plates" />
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
              <img src={image3} alt="weight plates" />
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

export default Dashboard;