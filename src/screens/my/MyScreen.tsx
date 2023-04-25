import Header from 'components/Global/template/Header';
import Layout from 'components/Global/template/Layout';
import UserInfo from 'components/User/template/UserInfo';
import UserToGoActions from 'components/User/template/UserToGoActions';
import React from 'react';
import {View} from 'react-native';

function MyScreen() {
  return (
    <Layout>
      <Header title="My" />
      <View className="p-4">
        <UserInfo />
        <UserToGoActions />
      </View>
    </Layout>
  );
}

export default MyScreen;
