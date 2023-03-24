import React from 'react';
import Toast, {ToastConfig} from 'react-native-toast-message';
import ToastMessage from '../ToastMessage';

const toastConfig: ToastConfig = {
  success: ({text1, onPress}) => (
    <ToastMessage type="success" message={text1!} onPress={onPress} />
  ),
  error: ({text1, onPress}) => (
    <ToastMessage type="error" message={text1!} onPress={onPress} />
  ),
};

function ToastContainer() {
  return <Toast config={toastConfig} />;
}

export default ToastContainer;
