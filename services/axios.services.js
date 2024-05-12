import axios from 'axios';

const instanceWithCredentials = axios.create({
  withCredentials: true,
  baseURL: 'http://3.75.158.163:10000/',
});

export default instanceWithCredentials;
