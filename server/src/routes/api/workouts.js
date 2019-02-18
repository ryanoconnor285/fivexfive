const express = require('express');
const router = express.Router();

// @route   GET api/workouts/test
// @desc    Tests workout route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: "Workouts Works" }));

module.exports = router;