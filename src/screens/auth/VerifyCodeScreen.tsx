import VerifyCodeForm from 'components/Auth/VerifyCodeForm';
import ActionsHeader from 'components/Global/ActionsHeader';
import Layout from 'components/Global/Layout';
import React from 'react';

function VerifyCodeScreen() {
  return (
    <Layout header={<ActionsHeader />}>
      <VerifyCodeForm />
    </Layout>
  );
}

export default VerifyCodeScreen;
