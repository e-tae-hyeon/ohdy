import FlexView from 'components/@base/FlexView';
import Header from 'components/Global/template/Header';
import Layout from 'components/Global/template/Layout';
import UserInfo from 'components/User/template/UserInfo';
import UserPolicies from 'components/User/template/UserPolicies';
import UserToGoActions from 'components/User/template/UserToGoActions';
import React from 'react';
import {View} from 'react-native';

function MyScreen() {
  return (
    <Layout>
      <Header title="My" />
      <View className="p-4">
        <FlexView>
          <UserInfo />
          <UserToGoActions />
          <UserPolicies />
        </FlexView>
      </View>
    </Layout>
  );
}

export default MyScreen;
