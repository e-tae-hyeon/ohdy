import {applyTokenClient} from 'apis/@client';
import {LoginUserData} from 'apis/types';
import tokenStorage from 'storages/tokenStorage';
import useUserStore from 'stores/useUserStore';
import {getErrorMessage} from 'utils/error';
import useToast from './useToast';

function useLogin() {
  const {setUser} = useUserStore();
  const {showToast} = useToast();

  return async ({user, tokens}: LoginUserData) => {
    try {
      applyTokenClient(tokens.accessToken);
      setUser(user);
      await tokenStorage.set(tokens);
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };
}

export default useLogin;
