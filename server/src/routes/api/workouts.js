const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Workout Model
const Workout = require('../../models/Workout');

// Validation
const validateWorkoutInput = require('../../validation/workout');

// @route   GET api/workouts/test
// @desc    Tests workout route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Workouts Works" }));

// @route   POST api/workouts
// @desc    Track a workout
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateWorkoutInput(req.body);

  // Check Validation
  if(!isValid) {
    // If any errors, send 400 with erros object
    return res.status(400).json(errors);
  }

  // Get current weights for each exercise
  const exercises = [];
  if (req.body.deadlift) exercises.deadlift = req.body.deadlift;
  if (req.body.benchpress) exercises.benchpress = req.body.benchpress;
  if (req.body.squat) exercises.squat = req.body.squat;
  if (req.body.shoulderPress) exercises.shoulderPress = req.body.shoulderPress;
  if (req.body.row) exercises.row = req.body.row;

  const newWorkout = new Workout({
    user: req.user.id,
    title: req.body.title,
    exercises: exercises
  });

  newWorkout.save()
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

module.exports = router;