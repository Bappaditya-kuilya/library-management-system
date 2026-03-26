import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API base URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'} // Add any custom headers you want
});

export default api;