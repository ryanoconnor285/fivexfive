const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    // Workout A or
    type: String,
    required: true
  },
  exercises: [
    {
      name: {
        type: String,
        required: true
      },
      weight: {
        type: Number,
        workingSet: Boolean,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Workout = mongoose.model('workouts', WorkoutSchema); 