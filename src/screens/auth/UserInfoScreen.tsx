import UserInfoForm from 'components/Auth/template/UserInfoForm';
import ActionsHeader from 'components/Global/module/ActionsHeader';
import Layout from 'components/Global/template/Layout';
import React from 'react';

function UserInfoScreen() {
  return (
    <Layout header={<ActionsHeader />}>
      <UserInfoForm />
    </Layout>
  );
}

export default UserInfoScreen;
