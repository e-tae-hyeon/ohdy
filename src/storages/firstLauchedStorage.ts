import EncryptedStorage from 'react-native-encrypted-storage';

const KEY = 'FIRST_LAUCNHED';

const firstLauchedStorage = {
  async set() {
    try {
      await EncryptedStorage.setItem(KEY, 'true');
    } catch (err) {}
  },
  async get() {
    try {
      const raw = await EncryptedStorage.getItem(KEY);
      if (!raw) return true;

      return false;
    } catch (err) {
      return true;
    }
  },

  async clear() {
    try {
      await EncryptedStorage.removeItem(KEY);
    } catch (err) {}
  },
};

export default firstLauchedStorage;
