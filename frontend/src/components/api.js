import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: 'http://localhost:4000', // Use environment variable or default to localhost
    headers: {
        'Content-Type': 'application/json',
    }
});

// Intercepting requests to add Authorization header if token is available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('tokened');
    console.log(token)
    if (token) {
        
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Intercepting responses for error handling
api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
        // Handle unauthorized access (token expired, etc.)
        // window.location.replace('/login');  // Redirect to login
    }
    return Promise.reject(error);
});

export default api;
