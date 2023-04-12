import axios from 'axios';
import Config from 'react-native-config';
import tokenStorage from 'storages/tokenStorage';
import {Tokens} from './types';

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

let isRefreshing = false;
let subscribers: ((accessToken: string) => void)[] = [];

function onRefreshed(accessToken: string) {
  subscribers.forEach(callback => callback(accessToken));
  subscribers = [];
}

client.interceptors.response.use(
  res => res,
  async err => {
    const {config, response} = err;
    if (response.status !== 401) return Promise.reject(err);

    if (isRefreshing) {
      return new Promise(resolve => {
        subscribers.push((accessToken: string) => {
          config.headers.Authorization = `Bearer ${accessToken}`;
          resolve(axios(config));
        });
      });
    }

    isRefreshing = true;
    const oldTokens = await tokenStorage.get();
    if (!oldTokens) return Promise.reject(err);
    const {refreshToken} = oldTokens;

    const newTokens = await refresh(refreshToken);

    if (!newTokens) {
      await tokenStorage.clear();
      return Promise.reject(err);
    }

    isRefreshing = false;
    onRefreshed(newTokens.accessToken);

    await tokenStorage.set(newTokens);
    applyTokenClient(newTokens.accessToken);

    config.headers.Authorization = `Bearer ${newTokens.accessToken}`;
    return axios(config);
  },
);

async function refresh(token: string) {
  const res = await axios.post<Tokens>(`${Config.API_URI}/api/auth/refresh`, {
    token,
  });

  return res.data;
}
