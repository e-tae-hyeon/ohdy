import React, {useEffect} from 'react';
import useCreateProfileStore from 'stores/useCreateProfileStore';
import useLaunchedStore from 'stores/useLaunchedStore';

function HowToUseProvider() {
  const {nickname} = useCreateProfileStore();
  const {setIsVisibleHowToUse} = useLaunchedStore();

  useEffect(() => {
    if (!nickname) return;
    setIsVisibleHowToUse(true);
  }, [nickname]);

  return <></>;
}

export default HowToUseProvider;
