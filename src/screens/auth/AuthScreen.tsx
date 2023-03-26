import Logotypo from 'components/@base/Logotypo';
import LoginBtns from 'components/Auth/template/LoginBtns';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function AuthScreen() {
  return (
    <Layout headerShown={false}>
      <View className="items-center justify-center flex-1">
        <Logotypo size="large" />
      </View>
      <LoginBtns />
    </Layout>
  );
}

export default AuthScreen;
