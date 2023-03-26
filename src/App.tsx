import {NavigationContainer} from '@react-navigation/native';
import PolicyBottomSheet from 'components/Auth/template/PolicyBottomSheet';
import ToastContainer from 'components/Global/template/ToastContainer';
import useLoadUser from 'hooks/useLoadUser';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';

function App() {
  const loadUser = useLoadUser();
  useEffect(() => {
    const load = async () => {
      await loadUser();
    };
    load();
  }, []);

  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <PolicyBottomSheet />
      <ToastContainer />
    </>
  );
}

export default App;
