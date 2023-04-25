import ActionsHeader from 'components/Global/template/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import UserAccountActions from 'components/User/template/UserAccountActions';
import React from 'react';
import {View} from 'react-native';

function SettingsScreen() {
  return (
    <Layout>
      <ActionsHeader title="설정" />
      <View className="p-4">
        <UserAccountActions />
      </View>
    </Layout>
  );
}

export default SettingsScreen;
