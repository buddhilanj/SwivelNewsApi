const BASE_URL = 'https://newsapi.org/';
const VERSION = 'v2/';
const API_KEY = '61ff6fef344e4138ae22d0c7d81fc372';
const getBaseUrl = () => BASE_URL + VERSION;

export const getHeadLineUrl = () =>
  `${getBaseUrl()}/top-headlines?country=${'us'}&apiKey=${API_KEY}`;

export const getByTypeUrl = ({type}) =>
  `${getBaseUrl()}/everything?q=${type}&apiKey=${API_KEY}`;
