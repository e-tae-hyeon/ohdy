import Spacer from 'components/@base/Spacer';
import UserInfoForm from 'components/Auth/template/UserInfoForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function UserInfoScreen() {
  return (
    <Layout>
      <Spacer size="large" />
      <View className="flex-1 p-4">
        <UserInfoForm />
      </View>
    </Layout>
  );
}

export default UserInfoScreen;
