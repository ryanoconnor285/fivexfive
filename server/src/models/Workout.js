const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  currentWeight: {
    type: Number
  },
  deadlift: {
    type: Number
  },
  benchpress: {
    type: Number
  },
  squat: {
    type: Number
  },
  shoulderPress: {
    type: Number
  },
  row: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Workout = mongoose.model('workouts', WorkoutSchema); 