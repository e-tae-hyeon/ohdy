import {applyTokenClient} from 'apis/@client';
import {LoginUserData} from 'apis/types';
import tokenStorage from 'storages/tokenStorage';
import useUserStore from 'stores/useUserStore';
import {getErrorMessage} from 'utils/error';
import useToast from './useToast';
import {useQueryClient} from '@tanstack/react-query';

function useLogin() {
  const queryClient = useQueryClient();
  const {setUser} = useUserStore();
  const {showToast} = useToast();

  return async ({user, tokens}: LoginUserData) => {
    try {
      applyTokenClient(tokens.accessToken);
      await queryClient.refetchQueries(['myProfile']);
      setUser(user);
      await tokenStorage.set(tokens);
    } catch (err) {
      showToast({type: 'error', message: getErrorMessage(err)});
    }
  };
}

export default useLogin;
