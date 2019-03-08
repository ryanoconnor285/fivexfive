const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  currentWeight: {
    type: Number
  },
  siUnits: {
    type: Boolean,
    default: false
  },
  deadlift: {
    type: Number,
    default: 45
  },
  benchpress: {
    type: Number,
    default: 45
  },
  squat: {
    type: Number,
    default: 45
  },
  shoulderPress: {
    type: Number,
    default: 45
  },
  row: {
    type: Number,
    default: 45
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema); 