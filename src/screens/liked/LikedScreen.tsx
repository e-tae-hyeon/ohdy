import Header from 'components/Global/template/Header';
import Layout from 'components/Global/template/Layout';
import LikedPlaceList from 'components/Place/template/LikedPlaceList';
import React from 'react';

function LikedScreen() {
  return (
    <Layout>
      <Header title="Liked" />
      <LikedPlaceList />
    </Layout>
  );
}

export default LikedScreen;
