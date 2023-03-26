import axios from 'axios';
import Config from 'react-native-config';

const client = axios.create({
  baseURL: Config.API_URI + '/api',
  withCredentials: true,
});

export default client;

export function applyTokenClient(accessToken: string) {
  client.defaults.headers.Authorization = `Bearer ${accessToken}`;
}

export function clearTokenClient() {
  client.defaults.headers.Authorization = '';
}
