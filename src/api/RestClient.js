import axios from 'axios';

let _this;

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

class RestClient {
  constructor() {
    _this = this;
    axios.defaults.baseURL = '';

    axios.interceptors.response.use(
      response => {
        console.log('response success', response);
        return this.responseValidate(response);
      },
      error => {
        console.log('response Error', error);
        return Promise.reject(this.responseErrorValidate(error));
      },
    );
  }

  /**
   * Success Response Handler
   *
   * @param {*} response
   * @returns
   * @memberof RestClient
   */
  responseValidate(response) {
    const {hasError, errorMessage} = this.statusHandler(response);
    if (hasError) {
      return {hasError: true, errorMessage: errorMessage};
    } else {
      return {
        hasError: false,
        errorMessage: '',
        data: response.data,
      };
    }
  }

  /**
   * Error Response Handler
   *
   * @param {*} error
   * @returns
   * @memberof RestClient
   */
  responseErrorValidate(error) {
    if (!error.response) {
      return {hasError: true, errorMessage: 'NETWORK_ERROR'};
    } else {
      const {hasError, errorMessage} = this.statusHandler(error.response);
      return {hasError: true, errorMessage: errorMessage};
    }
  }

  /**
   * Status Handler
   *
   * @param {*} responseObj
   * @returns
   * @memberof RestClient
   */
  statusHandler(responseObj) {
    if (responseObj == undefined) {
      return {hasError: true, errorMessage: 'SERVER_ERROR'};
    } else {
      switch (responseObj.status) {
        case 401:
          console.log('status handler');
          console.log(responseObj.data);
          return {
            hasError: true,
            errorMessage: responseObj.data.message,
          };
        case 400:
          return {hasError: true, errorMessage: 'UNAUTHORIZED'};
        case 403:
          return {hasError: true, errorMessage: 'FORBIDDEN'};
        case 404:
          return {hasError: true, errorMessage: 'NOT_FOUND'};
        case 500:
          console.log('500 handler');
          return {hasError: true, errorMessage: 'SERVER_ERROR'};
        default:
          console.log('default handler');
          return {hasError: false, errorMessage: ''};
      }
    }
  }

  /**
   * Main method call for all rest calls with in logic
   *
   * @param {any} method
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  API(method, url, body, header) {
    switch (method) {
      case METHODS.GET:
        return this._get(url, header);
      case METHODS.POST:
        body = body || {};
        return this._post(url, body, header);
      case METHODS.PUT:
        return this._put(url, body, header);
      case METHODS.DELETE:
        return this._delete(url, body, header);
      default:
        break;
    }
  }

  /**
   * GET Rest API Call
   *
   * @param {any} url
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _get(url, header) {
    return axios
      .get(url, {headers: header})
      .then(response => response)
      .catch(error => error);
  }

  /**
   * POST Rest API Call
   *
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _post(url, body, header) {
    return axios
      .post(url, body, {headers: header})
      .then(response => response)
      .catch(error => error);
  }

  /**
   * PUT Rest API Call
   *
   * @param {any} url
   * @param {any} body
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _put(url, body, header) {
    return axios
      .put(url, body, {headers: header})
      .then(response => response)
      .catch(error => error);
  }

  /**
   * DELETE Rest API Call
   *
   * @param {any} url
   * @param {any} header
   * @returns
   * @memberof RestClient
   */
  async _delete(url, body, header) {
    return axios
      .delete(url, {headers: header})
      .then(response => response)
      .catch(error => error);
  }
}

export const client = new RestClient();
