/* Services for API calls */

import axios, {AxiosRequestConfig} from 'axios';

export const API_CONFIGURATIONS = {
  BASE_URL: 'https://api.mocki.io/v1/',
  MAX_RETRY_COUNT: 2,
  RETRY_INTERVAL: 3000,
};

function withToken(requestConfig?: AxiosRequestConfig) {
  return Object.assign({}, requestConfig, {
    headers: {...requestConfig?.headers},
  });
}

export const Api = {
  getUsers: () => {
    return axios
      .get(API_CONFIGURATIONS.BASE_URL + 'b043df5a', withToken())
      .then((res) => {
        return res.data;
      });
  },
};
