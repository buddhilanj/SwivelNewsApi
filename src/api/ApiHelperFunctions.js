import {
  UNAUTHORIZED,
  FORBIDDEN,
  SERVER_ERROR,
  NOT_FOUND,
} from '../helpers/ErrorMessages';

class ApiHelperFunctions {
  /**
   * Check Validation with http response
   *
   * @param {*} responseObj
   * @returns
   * @memberof ApiHelperFunctions
   */
  responseHandler(responseObj) {
    const {hasError, errorMessage} = this.statusHandler(responseObj);
    if (hasError) {
      return {hasError: true, errorMessage: errorMessage};
    } else {
      const {message} = !!responseObj.data.message
        ? responseObj.data
        : responseObj.data;
      return {hasError: true, errorMessage: message};
    }
  }

  /**
   * Check http respone status
   *
   * @param {*} responseObj
   * @returns
   * @memberof ApiHelperFunctions
   */
  statusHandler(responseObj) {
    switch (responseObj.status) {
      case 400:
        return {
          hasError: true,
          errorMessage: responseObj.data.message,
        };
      case 401:
        return {hasError: true, errorMessage: UNAUTHORIZED};
      case 403:
        return {hasError: true, errorMessage: FORBIDDEN};
      case 404:
        return {hasError: true, errorMessage: NOT_FOUND};
      case 500:
        return {hasError: true, errorMessage: SERVER_ERROR};
      default:
        return {hasError: false, errorMessage: ''};
    }
  }
}

export const apiHelperFunctions = new ApiHelperFunctions();
