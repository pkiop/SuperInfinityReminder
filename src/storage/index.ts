import AsyncStorage from '@react-native-async-storage/async-storage';

type AsyncStorageKey = 'minds';
const getItem = async (key: AsyncStorageKey) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    throw 'no key';
  } catch (e) {
    console.log(e);
  }
};

const setItem = async (key: AsyncStorageKey, value: unknown) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export default {getItem, setItem};
