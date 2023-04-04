import NicknameForm from 'components/Auth/template/NicknameForm';
import ActionsHeader from 'components/Global/template/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function NicknameScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 p-4">
        <NicknameForm />
      </View>
    </Layout>
  );
}

export default NicknameScreen;
