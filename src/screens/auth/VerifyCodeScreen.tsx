import VerifyCodeForm from 'components/Auth/template/VerifyCodeForm';
import ActionsHeader from 'components/Global/template/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function VerifyCodeScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 p-4">
        <VerifyCodeForm />
      </View>
    </Layout>
  );
}

export default VerifyCodeScreen;
