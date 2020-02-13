import {
  GET_TOP_HEADLINES_SUCCESS,
  GET_NEWS_BY_TYPE_SUCCESS,
  GET_TOP_HEADLINES_FAIL,
  GET_NEWS_BY_TYPE_FAIL,
} from './Types';
import NewsService from '../services/NewsService';

export const getTopHeadlines = () => {
  return async dispatch => {
    const response = await NewsService.getTopHeadlines();
    if (response.hasError) {
      dispatch({
        type: GET_TOP_HEADLINES_FAIL,
        payload: response.errorMessage,
      });
    } else {
      dispatch({
        type: GET_TOP_HEADLINES_SUCCESS,
        payload: response.data.articles,
      });
    }
  };
};

export const getEverythingNews = ({type}) => {
  return async dispatch => {
    const response = await NewsService.getByTypeNews({type});
    if (response.hasError) {
      dispatch({
        type: GET_NEWS_BY_TYPE_FAIL,
        payload: response.errorMessage,
      });
    } else {
      dispatch({
        type: GET_NEWS_BY_TYPE_SUCCESS,
        payload: response.data.articles,
      });
    }
  };
};
