import {ToastType} from 'components/Global/module/ToastMessage';
import Toast from 'react-native-toast-message';

function useToast() {
  const showToast = ({
    type,
    message,
    onPress,
  }: {
    type: ToastType;
    message: string;
    onPress?: () => void;
  }) =>
    Toast.show({
      type,
      text1: message,
      onPress,
    });

  const hideToast = () => Toast.hide();

  return {showToast, hideToast};
}

export default useToast;
