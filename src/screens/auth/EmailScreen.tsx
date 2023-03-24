import EmailForm from 'components/Auth/EmailForm';
import ActionsHeader from 'components/Global/ActionsHeader';
import Layout from 'components/Global/Layout';
import React from 'react';

function EmailScreen() {
  return (
    <Layout header={<ActionsHeader />}>
      <EmailForm />
    </Layout>
  );
}

export default EmailScreen;
