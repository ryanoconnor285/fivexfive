import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res => 
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    //  User can create and account without a profile.  If profile has not been created an empty object will be returned.
    .catch(err => 
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
}

//  Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

//  Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}