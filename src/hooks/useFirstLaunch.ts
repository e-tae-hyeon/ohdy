import firstLauchedStorage from 'storages/firstLauchedStorage';
import useLaunchedStore from 'stores/useLaunchedStore';

function useFirstLaunch() {
  const {setIsFirstLaunched} = useLaunchedStore();

  return async () => {
    const isFirstLaunched = await firstLauchedStorage.get();
    setIsFirstLaunched(isFirstLaunched);
    await firstLauchedStorage.set();
  };
}

export default useFirstLaunch;
