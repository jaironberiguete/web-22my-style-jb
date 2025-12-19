import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Replace with your API endpoint
});

// Add JWT token to every request if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token'); // store after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
