import UserInfoForm from 'components/Auth/UserInfoForm';
import ActionsHeader from 'components/Global/ActionsHeader';
import Layout from 'components/Global/Layout';
import React from 'react';

function UserInfoScreen() {
  return (
    <Layout header={<ActionsHeader />}>
      <UserInfoForm />
    </Layout>
  );
}

export default UserInfoScreen;
