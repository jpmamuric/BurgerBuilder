import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-84fb5.firebaseio.com/'
});

export default instance;
