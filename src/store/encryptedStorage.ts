// utils/encryptedStorage.ts
import CryptoJS from 'crypto-js';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const SECRET = process.env.NEXT_PUBLIC_REDUX_SECRET || 'default_secret'; // For demo only

const isServer = typeof window === 'undefined';

const baseStorage = !isServer
  ? createWebStorage('local')
  : {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(null),
      removeItem: () => Promise.resolve(),
    };

export const encryptedStorage = {
  async setItem(key: string, value: string) {
    try {
      const encrypted = CryptoJS.AES.encrypt(value, SECRET).toString();
      return baseStorage.setItem(key, encrypted);
    } catch (err) {
      console.error('[Storage Encryption Error]:', err);
      return Promise.resolve(null);
    }
  },

  async getItem(key: string) {
    try {
      const encrypted = await baseStorage.getItem(key);
      if (!encrypted) return null;
      const bytes = CryptoJS.AES.decrypt(encrypted, SECRET);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted || null;
    } catch (err) {
      console.error('[Storage Decryption Error]:', err);
      return null;
    }
  },

  async removeItem(key: string) {
    return baseStorage.removeItem(key);
  },
};
