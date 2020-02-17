import {UPDATE_USERNAME} from '../actions/Types';
const initialState = {
  username: '',
  preference: '',
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export default ProfileReducer;
