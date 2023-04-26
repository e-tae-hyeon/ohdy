import ToastMessage from 'components/Global/module/ToastMessage';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast, {ToastConfig} from 'react-native-toast-message';

const toastConfig: ToastConfig = {
  success: ({text1, onPress}) => (
    <ToastMessage type="success" message={text1!} onPress={onPress} />
  ),
  error: ({text1, onPress}) => (
    <ToastMessage type="error" message={text1!} onPress={onPress} />
  ),
};

function ToastContainer() {
  const {top} = useSafeAreaInsets();

  return <Toast config={toastConfig} topOffset={top + 12} />;
}

export default ToastContainer;
