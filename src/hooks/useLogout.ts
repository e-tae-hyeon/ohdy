import {clearTokenClient} from 'apis/@client';
import tokenStorage from 'storages/tokenStorage';
import useUserStore from 'stores/useUserStore';

function useLogout() {
  const {clear} = useUserStore();

  return async () => {
    try {
      clear();
      clearTokenClient();
      await tokenStorage.clear();
    } catch (err) {}
  };
}

export default useLogout;
