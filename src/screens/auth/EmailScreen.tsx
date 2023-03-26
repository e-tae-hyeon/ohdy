import EmailForm from 'components/Auth/template/EmailForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function EmailScreen() {
  return (
    <Layout headerHasBack>
      <EmailForm />
    </Layout>
  );
}

export default EmailScreen;
