import EmailForm from 'components/Auth/template/EmailForm';
import ActionsHeader from 'components/Global/module/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function EmailScreen() {
  return (
    <Layout header={<ActionsHeader />}>
      <EmailForm />
    </Layout>
  );
}

export default EmailScreen;
