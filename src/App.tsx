import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PolicyBottomSheet from 'components/Auth/template/PolicyBottomSheet';
import ToastContainer from 'components/Global/template/ToastContainer';
import useLoadUser from 'hooks/useLoadUser';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </QueryClientProvider>
      <PolicyBottomSheet />
      <ToastContainer />
    </>
  );
}

export default App;
