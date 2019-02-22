const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = validateWorkoutInput = (data) => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.exercises = !isEmpty(data.exercises) ? data.exercises : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'title field is required';
  }

  // if (Validator.isEmpty(data.exercises)) {
  //   errors.exercises = 'exercises are required';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}