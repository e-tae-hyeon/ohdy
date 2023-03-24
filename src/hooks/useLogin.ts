import {useNavigation} from '@react-navigation/native';
import {AuthGroupNavigationProp} from 'navigations/RootStack/types';

function useLogin() {
  const {navigate} = useNavigation<AuthGroupNavigationProp>();

  const startEmailLogin = () => {
    navigate('Email');
  };

  return {startEmailLogin};
}

export default useLogin;
