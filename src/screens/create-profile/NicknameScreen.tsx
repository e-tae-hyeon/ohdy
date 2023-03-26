import NicknameForm from 'components/Auth/template/NicknameForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function NicknameScreen() {
  return (
    <Layout headerHasBack>
      <NicknameForm />
    </Layout>
  );
}

export default NicknameScreen;
