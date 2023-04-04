import EmailForm from 'components/Auth/template/EmailForm';
import ActionsHeader from 'components/Global/template/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function EmailScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 p-4">
        <EmailForm />
      </View>
    </Layout>
  );
}

export default EmailScreen;
