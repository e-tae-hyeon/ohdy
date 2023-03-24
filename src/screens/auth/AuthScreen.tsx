import FlexContainer from 'components/@base/FlexContainer';
import Layout from 'components/@base/Layout';
import Logotypo from 'components/@base/Logotypo';
import LoginBtns from 'components/Auth/LoginBtns';
import React from 'react';
import {View} from 'react-native';

function AuthScreen() {
  return (
    <Layout>
      <View className="items-center justify-center flex-1">
        <Logotypo size="large" />
      </View>
      <LoginBtns />
    </Layout>
  );
}

export default AuthScreen;
