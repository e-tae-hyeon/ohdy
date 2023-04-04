import KeywordsForm from 'components/Auth/template/KeywordsForm';
import ActionsHeader from 'components/Global/template/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';
import {View} from 'react-native';

function KeywordsScreen() {
  return (
    <Layout>
      <ActionsHeader />
      <View className="flex-1 p-4">
        <KeywordsForm />
      </View>
    </Layout>
  );
}

export default KeywordsScreen;
