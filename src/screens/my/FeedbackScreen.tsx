import ActionsHeader from 'components/Global/template/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import FeedbackForm from 'components/User/template/FeedbackForm';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function FeedbackScreen() {
  return (
    <Layout>
      <ActionsHeader title="피드백" />
      <KeyboardAwareScrollView className="flex-1 p-4">
        <FeedbackForm />
      </KeyboardAwareScrollView>
    </Layout>
  );
}

export default FeedbackScreen;
