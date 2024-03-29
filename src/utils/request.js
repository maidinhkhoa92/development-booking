import axios from 'axios';
const { REACT_APP_BASE_URL, REACT_APP_TOKEN } = process.env;

const request = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token '+REACT_APP_TOKEN
  }
});

// before send request
request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  }
);

// after send request
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  }
);

export default request;
