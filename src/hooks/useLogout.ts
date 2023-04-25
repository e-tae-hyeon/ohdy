import {useQueryClient} from '@tanstack/react-query';
import {clearTokenClient} from 'apis/@client';
import tokenStorage from 'storages/tokenStorage';
import useUserStore from 'stores/useUserStore';

function useLogout() {
  const queryClient = useQueryClient();
  const {clear} = useUserStore();

  return async () => {
    try {
      clear();
      clearTokenClient();
      queryClient.invalidateQueries(['myProfile']);
      await tokenStorage.clear();
    } catch (err) {}
  };
}

export default useLogout;
