import {useQueryClient} from '@tanstack/react-query';
import {applyTokenClient} from 'apis/@client';
import {checkMe} from 'apis/me';
import tokenStorage from 'storages/tokenStorage';
import useUserStore from 'stores/useUserStore';

function useLoadUser() {
  const {setUser} = useUserStore();
  const queryClient = useQueryClient();

  return async () => {
    try {
      const tokens = await tokenStorage.get();
      if (!tokens) return;

      applyTokenClient(tokens.accessToken);
      const user = await checkMe();
      setUser(user);
      queryClient.invalidateQueries(['myProfile']);
    } catch (err) {
      console.error(err);
    }
  };
}

export default useLoadUser;
