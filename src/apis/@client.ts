import axios from 'axios';
import Config from 'react-native-config';

const client = axios.create({
  baseURL: Config.API_URI + '/api',
  withCredentials: true,
});

export default client;
