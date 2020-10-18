import axios from 'axios';

// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = process.env.API_ROOT; // 域名

const instance = axios.create();

// `timeout` specifies the number of milliseconds before the request times out.
// If the request takes longer than `timeout`, the request will be aborted.
// instance.defaults.timeout = 5000; // default is `0` (no timeout)

// `baseURL` will be prepended to `url` unless `url` is absolute.
// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
// to methods of that instance.
// instance.defaults.baseURL = process.env.API_ROOT;

// request interceptor
instance.interceptors.request.use(
  (config) => {
    // config.data = JSON.stringify(config.data);

    // 如果沒有cors的問題則可以都不加
    // config.headers = {
    //   'Access-Control-Allow-Origin': process.env.API_ROOT,
    //   'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    //   'Access-Control-Max-Age': '86400',
    // };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

function errorHandle(status: number, msg: any) {
  switch (status) {
    case 404:
      console.error(msg);
      break;
    case 500:
      console.error(msg);
      break;
    case 503:
      console.error(msg);
      break;
    default:
      console.error(msg);
  }
}

// response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response, data } = error;

    if (response) {
      errorHandle(response, data.error);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export function fetch(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function post(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function remove(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance.delete(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

// wrap it up
export const http = {
  fetch: function(paramObj: any) {
    return fetch('api/users', paramObj);
  },
  post: function(paramObj: any) {
    return post('api/users', paramObj);
  },
  put: function(paramObj: any) {
    return put('api/users', paramObj);
  },
  delete: function(paramObj: any) {
    return remove('api/users', paramObj);
  },
};
