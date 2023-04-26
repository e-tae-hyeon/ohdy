import Layout from 'components/Global/template/Layout';
import SurfingHeader from 'components/Surfing/template/SurfingHeader';
import SurfingPlaceList from 'components/Surfing/template/SurfingPlaceList';
import React from 'react';

function SurfingScreen() {
  return (
    <Layout edges={['top']}>
      <SurfingHeader />
      <SurfingPlaceList />
    </Layout>
  );
}

export default SurfingScreen;
