import VerifyCodeForm from 'components/Auth/template/VerifyCodeForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function VerifyCodeScreen() {
  return (
    <Layout headerHasBack>
      <VerifyCodeForm />
    </Layout>
  );
}

export default VerifyCodeScreen;
