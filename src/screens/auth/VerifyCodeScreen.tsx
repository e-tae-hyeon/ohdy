import VerifyCodeForm from 'components/Auth/template/VerifyCodeForm';
import ActionsHeader from 'components/Global/module/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function VerifyCodeScreen() {
  return (
    <Layout header={<ActionsHeader />}>
      <VerifyCodeForm />
    </Layout>
  );
}

export default VerifyCodeScreen;
