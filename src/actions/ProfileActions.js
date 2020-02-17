import {UPDATE_USERNAME} from './Types';
import ProfileService from '../services/ProfileService';

export const saveProfileData = ({username, preference}) => {
  return async dispatch => {
    await ProfileService.setSavedData({username, preference});
    dispatch({
      type: UPDATE_USERNAME,
      payload: {username, preference},
    });
  };
};

export const readProfileData = () => {
  return async dispatch => {
    const {username, preference} = await ProfileService.getStoredData();
    dispatch({
      type: UPDATE_USERNAME,
      payload: {username, preference},
    });
  };
};
