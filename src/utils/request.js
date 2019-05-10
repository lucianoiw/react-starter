import axios from 'axios';
import ApiError from './apiError';

export const { API_URL } = process.env;

const throwError = (json, status) => {
  throw new ApiError(status, json);
};

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(json => throwError(json, response.status));
};

const request = async (url, options, headers) => {
  const params = {
    url,
    withCredentials: false,
    'Content-Type': 'application/json',
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    ...options,
  };

  const response = await axios(params);

  const responseChecked = await checkStatus(response);
  return responseChecked;
};

export default request;
