import PolicyBottomSheet from 'components/Auth/template/PolicyBottomSheet';
import VerifyCodeForm from 'components/Auth/template/VerifyCodeForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function VerifyCodeScreen() {
  return (
    <Layout headerHasBack>
      <VerifyCodeForm />
      <PolicyBottomSheet />
    </Layout>
  );
}

export default VerifyCodeScreen;
