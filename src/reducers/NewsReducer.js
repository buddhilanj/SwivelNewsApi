import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_FAIL,
  GET_NEWS_BY_TYPE_SUCCESS,
  GET_NEWS_BY_TYPE_FAIL,
} from '../actions/Types';

const initialState = {
  headlines: [],
  customnews: [],
  headlinesError: '',
  customError: '',
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_HEADLINES_SUCCESS: {
      return {...state, headlinesError: '', headlines: action.payload};
    }
    case GET_TOP_HEADLINES_FAIL: {
      return {...state, headlinesError: action.payload};
    }
    case GET_NEWS_BY_TYPE_SUCCESS: {
      return {...state, customError: '', customnews: action.payload};
    }
    case GET_NEWS_BY_TYPE_FAIL: {
      return {...state, customError: action.payload};
    }
    default:
      return state;
  }
};

export default NewsReducer;
