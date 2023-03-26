import {NavigationContainer} from '@react-navigation/native';
import PolicyBottomSheet from 'components/Auth/template/PolicyBottomSheet';
import ToastContainer from 'components/Global/template/ToastContainer';
import RootStack from 'navigations/RootStack';
import React from 'react';

function App() {
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
