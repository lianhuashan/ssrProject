import axios from 'axios';
const baseUrl = 'http://localhost:5000/api';
export default axios.create({
  baseURL: baseUrl,
  timeout: 1000
});
