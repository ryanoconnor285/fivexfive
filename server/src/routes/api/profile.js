const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Workout Model
const Profile = require('../../models/Profile');

// Load User Model
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profile
// @desc    Get current user's profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if(!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(400).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/profile
// @desc    Create user's profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.currentWeight) profileFields.currentWeight = req.body.currentWeight;
  if (req.body.siUnits) profileFields.siUnits = req.body.siUnits;
  if (req.body.deadlift) profileFields.deadlift = req.body.deadlift;
  if (req.body.benchpress) profileFields.benchpress = req.body.benchpress;
  if (req.body.squat) profileFields.squat = req.body.squat;
  if (req.body.shoulderPress) profileFields.shoulderPress = req.body.shoulderPress;
  if (req.body.row) profileFields.row = req.body.row;

  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if(profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id}, 
          { $set: profileFields }, 
          { new: true} 
        )
        .then(profile => res.json(profile))
        .catch(err => res.status(404).json(err));
      } else {
        // Create

        new Profile(profileFields).save()
          .then(profile => res.json(profile))
      }
    })
});

// @route   POST api/profile/delete
// @desc    Delete current user's profile
// @access  Private
router.post('/delete', passport.authenticate('jwt', { session: false }), (req, res) => {
  const errors = {};
  Profile.findOneAndDelete({ user: req.user.id })
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        return res.status(400).json(errors);
      }
      return res.json()
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;