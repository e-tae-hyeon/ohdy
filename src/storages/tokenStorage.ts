import {Tokens} from 'apis/types';
import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = 'TOKEN';

const tokenStorage = {
  async set(tokens: Tokens) {
    try {
      await EncryptedStorage.setItem(KEY, JSON.stringify(tokens));
    } catch (err) {}
  },
  async get() {
    try {
      const raw = await EncryptedStorage.getItem(KEY);
      if (!raw) return undefined;

      return JSON.parse(raw) as Tokens;
    } catch (err) {}
  },

  async clear() {
    try {
      await EncryptedStorage.removeItem(KEY);
    } catch (err) {}
  },
};

export default tokenStorage;
