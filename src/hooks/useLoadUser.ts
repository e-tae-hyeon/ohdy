import {useQueryClient} from '@tanstack/react-query';
import {applyTokenClient} from 'apis/@client';
import {checkMe} from 'apis/me';
import tokenStorage from 'storages/tokenStorage';
import useUserStore from 'stores/useUserStore';
import useMyProfile from './useMyProfile';

function useLoadUser() {
  const {setUser} = useUserStore();
  const {refetch: refetchProfile} = useMyProfile();

  return async () => {
    try {
      // get and set auth tokens
      const tokens = await tokenStorage.get();
      if (!tokens) return;
      applyTokenClient(tokens.accessToken);

      // get and set user data
      const user = await checkMe();
      setUser(user);

      // get profile
      await refetchProfile();
    } catch (err) {
      console.error(err);
    }
  };
}

export default useLoadUser;
