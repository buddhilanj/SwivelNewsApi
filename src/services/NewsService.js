import {getHeadLineUrl, getByTypeUrl} from '../api/Urls';
import {client, METHODS} from '../api/RestClient';
import {NEWS_TYPES} from '../helpers/Enum';
class NewsService {
  getTopHeadlines = async () => {
    const url = getHeadLineUrl();
    const response = await _requestFromServer(METHODS.GET, url);
    return response;
  };

  getByTypeNews = async ({type = NEWS_TYPES.BITCOIN}) => {
    const url = getByTypeUrl({type});
    const response = await _requestFromServer(METHODS.GET, url);
    return response;
  };
}

const _requestFromServer = async (method, requestUrl, data = null) => {
  return await client.API(method, requestUrl, data ? data : '', {
    'Content-Type': 'application/json',
  });
};

export default new NewsService();
