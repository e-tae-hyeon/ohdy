import {NavigationContainer} from '@react-navigation/native';
import RootStack from 'navigations/RootStack';
import React from 'react';

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
