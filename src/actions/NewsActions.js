import {GET_TOP_HEADLINES, GET_NEWS_BY_TYPE} from './Types';
import NewsService from '../services/NewsService';

export const getTopHeadlines = () => {
  return async dispatch => {
    const response = await NewsService.getTopHeadlines();
    console.log(response);
  };
};
