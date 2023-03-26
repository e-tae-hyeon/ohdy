import EncryptedStorage from 'react-native-encrypted-storage';
import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler(EncryptedStorage)
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
