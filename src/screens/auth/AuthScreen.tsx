import Logotypo from 'components/@base/Logotypo';
import LoginBtns from 'components/Auth/template/LoginBtns';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function AuthScreen() {
  return (
    <Layout>
      <View className="flex-1 px-4 py-8">
        <View className="items-center justify-center flex-1">
          <Logotypo size="large" />
        </View>
        <LoginBtns />
      </View>
    </Layout>
  );
}

export default AuthScreen;
