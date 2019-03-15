import axios from 'axios';

export default axios.create({
  baseURL: 'https://homesenseapi.herokuapp.com/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
