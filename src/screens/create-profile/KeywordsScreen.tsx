import KeywordsForm from 'components/Auth/template/KeywordsForm';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function KeywordsScreen() {
  return (
    <Layout headerHasBack>
      <KeywordsForm />
    </Layout>
  );
}

export default KeywordsScreen;
