import Spacer from 'components/@base/Spacer';
import NicknameForm from 'components/Auth/template/NicknameForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function NicknameScreen() {
  return (
    <Layout>
      <Spacer size="large" />
      <View className="flex-1 p-4">
        <NicknameForm />
      </View>
    </Layout>
  );
}

export default NicknameScreen;
