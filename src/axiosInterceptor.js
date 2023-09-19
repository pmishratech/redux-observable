import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your API base URL
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request intercepted:', config);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response intercepted:', response);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
