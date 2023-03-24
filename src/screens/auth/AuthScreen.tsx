import Logotypo from 'components/@base/Logotypo';
import LoginBtns from 'components/Auth/LoginBtns';
import Layout from 'components/Global/Layout';
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
