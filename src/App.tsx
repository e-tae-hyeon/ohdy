import {NavigationContainer} from '@react-navigation/native';
import ToastContainer from 'components/Global/ToastContainer';
import RootStack from 'navigations/RootStack';
import React from 'react';

function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
      <ToastContainer />
    </>
  );
}

export default App;
