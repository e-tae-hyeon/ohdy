import EmailForm from 'components/Auth/EmailForm';
import ActionsHeader from 'components/Global/ActionsHeader';
import Layout from 'components/Global/Layout';
import React from 'react';
import {View} from 'react-native';

function EmailScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="justify-center flex-1 p-8 mt-[-40px]">
        <EmailForm />
      </View>
    </Layout>
  );
}

export default EmailScreen;
