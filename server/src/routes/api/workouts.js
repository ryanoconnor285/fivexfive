const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Workout Model
const Workout = require('../../models/Workout');

// Load Workout Model
const Profile = require('../../models/Profile');

// Load User Model
const User = require('../../models/User');


// @route   GET api/workouts/test
// @desc    Tests workout route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Workouts Works" }));

// @route   GET api/workouts
// @desc    Get current user's workouts
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Workout.find({ user: req.user.id })
    .then(workouts => {
      if (!workouts) {
        errors.workouts = 'There are no workouts for this user';
        return res.status(400).json(errors);
      }
      res.json(workouts);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/workouts
// @desc    Create workout
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const workoutFields = {};
  workoutFields.user = req.user.id;
  if (req.body.currentWeight) workoutFields.currentWeight = req.body.currentWeight;
  if (req.body.deadlift) workoutFields.deadlift = req.body.deadlift;
  if (req.body.benchpress) workoutFields.benchpress = req.body.benchpress;
  if (req.body.squat) workoutFields.squat = req.body.squat;
  if (req.body.shoulderPress) workoutFields.shoulderPress = req.body.shoulderPress;
  if (req.body.row) workoutFields.row = req.body.row;
  
  new Workout(workoutFields).save()
    .then(workout => res.json(workout))

});

module.exports = router;