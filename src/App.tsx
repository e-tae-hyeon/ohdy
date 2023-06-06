import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PolicyBottomSheet from 'components/Auth/template/PolicyBottomSheet';
import GlobalDialog from 'components/Global/template/GlobalDialog';
import ToastContainer from 'components/Global/template/ToastContainer';
import HowToUse from 'components/Home/template/HowToUse';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import firstLauchedStorage from 'storages/firstLauchedStorage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  useEffect(() => {
    firstLauchedStorage.clear();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootStack />
            <HowToUse />
          </NavigationContainer>
          <GlobalDialog />
          <PolicyBottomSheet />
        </QueryClientProvider>
        <ToastContainer />
      </SafeAreaProvider>
    </>
  );
}

export default App;
