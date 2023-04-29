import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import PolicyBottomSheet from 'components/Auth/template/PolicyBottomSheet';
import GlobalDialog from 'components/Global/template/GlobalDialog';
import ToastContainer from 'components/Global/template/ToastContainer';
import RootStack from 'navigations/RootStack';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  useEffect(() => {
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
